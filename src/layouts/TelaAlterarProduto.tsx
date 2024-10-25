import { useEffect, useState } from "react";
import { AlterarProdutoProps } from "../navigation/HomeNavigator";
import firestore from "@react-native-firebase/firestore";
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Produto } from "../types/Produto";
import { styles } from "../styles/styles";


const TelaAlterarProduto = (props: AlterarProdutoProps) => {

    const [nome, setNome] = useState('');
    const [nomeAutor, setNomeAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [editora, setEditora] = useState('');
    const [codigoBarras, setCodigoBarras] = useState('');
    const [preco, setPreco] = useState('');

    //Carrrega os states com os dados do produto do banco de dados
    //Usando o id que recebeu como propriedade ao navegar para essa tela de alteração
    async function carregar() {
        const resultado = await firestore()
            .collection('produtos')
            .doc(props.route.params.id)
            .get();

        const produto = {
            id: resultado.id,
            ...resultado.data()
        } as Produto;

        setNome(produto.nome);
        setNomeAutor(produto.nomeAutor);
        setGenero(produto.genero);
        setEditora(produto.editora);
        setCodigoBarras(produto.codigoBarras);
        setPreco(produto.preco.toString());

    };
    //irá chamar a função de carregar

    useEffect(() => {
        carregar();
    }, []);

    function alterar() {
        if (verificarCampos()) {
            let produto = {
                nome: nome,
                nomeAutor: nomeAutor,
                genero: genero,
                editora: editora,
                codigoBarras: codigoBarras,
                preco: Number.parseFloat(preco)
            } as Produto;

            firestore()
                .collection('produtos')
                .doc(props.route.params.id)
                .update(produto)
                .then(() => {
                    Alert.alert("Produto", "Alterado com sucesso")
                    props.navigation.goBack();
                })
                .catch((error) => console.log(error));
        }
    }

    //fazer novas alterações aqui
    function verificarCampos() {
        if (!nome) {
            Alert.alert("Nome em branco",
                "Digite um nome")
            return false;
        }

        if (!codigoBarras) {
            Alert.alert("Código de Barras em branco",
                "Digite um código de barras"
            )
            return false;
        }

        if (!preco) {
            Alert.alert("Preço em branco",
                "Digite um preço"
            )
            return false;
        }

        let precoNumero = Number.parseFloat(preco)
        if (precoNumero <= 0) {
            Alert.alert("Preço incorreto",
                "Digite um preço maior do que zero"
            )
            return false;
        }

        return true;
    }

    return (
        <View
            style={styles.tela}>
            <ScrollView>
                <Text style={styles.tituloTela}>Alterar Dados do Produto</Text>
                <Text
                    style={styles.titulo_campos}>
                    Nome:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    defaultValue={nome}
                    onChangeText={(text) => { setNome(text) }} />

                <Text
                    style={styles.titulo_campos}>
                    Nome do Autor:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    defaultValue={nomeAutor}
                    onChangeText={(text) => { setNomeAutor(text) }} />

                <Text
                    style={styles.titulo_campos}>
                    Gênero:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    defaultValue={genero}
                    onChangeText={(text) => { setGenero(text) }} />

                <Text
                    style={styles.titulo_campos}>
                    Editora:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    defaultValue={editora}
                    onChangeText={(text) => { setEditora(text) }} />

                <Text
                    style={styles.titulo_campos}>
                    Código de Barras:
                </Text>

                <TextInput
                    maxLength={7}
                    style={[styles.caixa_texto, { width: '60%' }]}
                    defaultValue={codigoBarras}
                    onChangeText={(text) => { setCodigoBarras(text) }} />

                <Text
                    style={styles.titulo_campos}>
                    Preço:
                </Text>

                <TextInput
                    style={[styles.caixa_texto, { width: '40%' }]}
                    defaultValue={preco}
                    onChangeText={(text) => { setPreco(text) }} />

                <Pressable
                    style={styles.botao}
                    onPress={() => alterar()}>
                    <Text style={styles.texto_botao}>Salvar alterações</Text>
                </Pressable>

            </ScrollView>

        </View>
    );
}


export default TelaAlterarProduto;