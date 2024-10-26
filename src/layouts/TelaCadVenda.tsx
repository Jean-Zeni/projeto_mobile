import { Alert, FlatList, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { CadVendaProps } from "../navigation/HomeNavigator"
import { styles } from "../styles/styles";
import { useState, useEffect } from "react";
import { Produto } from "../types/Produto";
import firestore, { firebase } from "@react-native-firebase/firestore";
import { Venda } from "../types/Venda";

const TelaCadVenda = (props: CadVendaProps) => {

    //Declaração de variáveis
    const [nomeLivro, setNomeLivro] = useState('');
    const [dataVenda, setDataVenda] = useState('');
    const [cpf, setCpf] = useState('');
    const [totalVenda, setTotalVenda] = useState('');
    const [valorProduto, setValorProduto] = useState('');
    const [lista, setLista] = useState([] as Venda[]);
    const [desc, setDesc] = useState(0);

    const db = firebase.firestore();

    const buscarLivroPorNome = async (nomeLivro: string) => {
        try {
            const snapshot = await db.collection('produtos').where('nome', '==', nomeLivro).get();

            if (!snapshot.empty) {
                const livroData = snapshot.docs[0].data();
                setValorProduto(livroData.preco.toString())

                return {
                    nomeLivro: livroData.nome,
                    valorProduto: livroData.preco,
                };
            } else {
                Alert.alert("Erro",
                    "Livro não encontrado"
                )
                return null;
            }
        } catch (error) {
            Alert.alert("Erro ao buscar livro");
        }
    };

    const buscarCpf = async (cpf: string) => {
        try {
            const snapshot = await db.collection('clientes').where('cpf', '==', cpf).get();

            if (!snapshot.empty) {
                const cpfData = snapshot.docs[0].data();
                setCpf(cpfData.cpf)

                return {
                    nomeCliente: cpfData.nome,
                    Cpf: cpfData.cpf,
                };
            } else {
                Alert.alert("Erro",
                    "Cliente não encontrado"
                )
                return null;
            }
        } catch (error) {
            Alert.alert("Erro ao buscar cliente");
        }
    };

    async function verificarCliente() {


        const dados = await firestore()
            .collection('clientes')
            .where("cpf", "==", cpf)
            .get();


        const cliente = dados.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }) as Venda[];

        setLista(cliente);

        return cliente.length > 0;
    }

    async function calcularDesc() {
        if (await verificarCliente()) {
            setDesc(Number.parseFloat(valorProduto) - (15 / 100) * Number.parseFloat(valorProduto))
        }
    }

    function concluirVenda() {

        let venda = {
            nomeLivro: nomeLivro,
            dataVenda: dataVenda,
            totalVenda: Number.parseFloat(totalVenda),
            cpf: cpf
        } as Venda;

        firestore()
            .collection('vendas')
            .add(venda)
            .then(() => {
                Alert.alert("Produto", "Cadastrado com sucesso!");
                props.navigation.goBack();
            })
            .catch((error) => console.log(error));
    }

    function verificarCampos() {
        if (nomeLivro == "") {
            Alert.alert("Campo vazio",
                "O campo 'Nome do Livro' precisa ser preenchido")
            return false;
        }

        if (dataVenda == "") {
            Alert.alert("Campo vazio",
                "O campo 'Data da Venda' precisa ser preenchido")
            return false;
        }

        if (totalVenda == "") {
            Alert.alert("Campo vazio",
                "O campo 'Valor da Venda' precisa ser preenchido")
            return false;
        }

        if (Number.parseFloat(totalVenda) <= 0) {
            Alert.alert("Valor não aceito",
                "O valor precisa ser maior que zero"
            )
            return false;
        }

        if (cpf.length != 11) {
            Alert.alert("Valor excedente de caracteres",
                "O CPF deve conter exatamete 11 algarismos"
            )
            return false;
        }

        if (!cpf.match(/^\d+$/)) {
            Alert.alert("Valor não aceito",
                "Um número de CPF é composto somente por números"
            )
            return false;
        }
    }



    return (

        <View style={styles.tela}>

            <ScrollView>

                <Text style={styles.tituloTela}>Cadastro de Venda</Text>

                <Text
                    style={styles.titulo_campos}>
                    Nome do Livro:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNomeLivro(text) }} />

                <Pressable style={[styles.botao, { alignSelf: "center" }]}
                    onPress={() => buscarLivroPorNome(nomeLivro)}>
                    <Text style={styles.texto_botao}>
                        Buscar Produto
                    </Text>
                </Pressable>

                <Text
                    style={styles.titulo_campos}>
                    Data da Venda:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setDataVenda(text) }} />

                <Text
                    style={styles.titulo_campos}>
                    Valor da Venda:
                </Text>

                <TextInput
                    style={[styles.caixa_texto, { width: 150 }]}
                    // onChangeText={(text) => { setValorProduto(text) }}
                    value={valorProduto} />

                <Text
                    style={styles.titulo_campos}>
                    Valor Total da Venda:
                </Text>

                <TextInput
                value = {desc.toFixed(2)}
                />

                <Text
                    style={styles.titulo_campos}>
                    CPF:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setCpf(text) }} />

                <Pressable style={[styles.botao, { alignSelf: "center" }]}
                    onPress={() => buscarCpf(cpf)}>
                    <Text style={styles.texto_botao}>
                        Verificar CPF
                    </Text>
                </Pressable>

                <Pressable style={[styles.botao, { alignSelf: "center" }]}
                    onPress={() => concluirVenda()}>
                    <Text style={styles.texto_botao}>
                        Confirmar Venda
                    </Text>
                </Pressable>

                <Pressable style={[styles.botao, { alignSelf: "center" }]}
                    onPress={() => calcularDesc()}>
                    <Text style={styles.texto_botao}>
                        Calcular Desconto
                    </Text>
                </Pressable>

            </ScrollView>

        </View>

    )

}

export default TelaCadVenda;