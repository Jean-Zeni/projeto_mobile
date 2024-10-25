import { Alert, FlatList, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { CadVendaProps } from "../navigation/HomeNavigator"
import { styles } from "../styles/styles";
import { useState } from "react";
import { Produto } from "../types/Produto";
import firestore from "@react-native-firebase/firestore";
import { Venda } from "../types/Venda";

const TelaCadVenda = (props: CadVendaProps) => {

    //Declaração de variáveis
    const [nomeLivro, setNomeLivro] = useState('');
    const [dataVenda, setDataVenda] = useState('');
    const [cpf, setCpf] = useState('');
    const [totalVenda, setTotalVenda] = useState('');

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
        if (!nomeLivro) {
            Alert.alert("Campo vazio",
                "O campo 'Nome do Livro' precisa ser preenchido")
            return false;
        }

        if (!dataVenda) {
            Alert.alert("Campo vazio",
                "O campo 'Data da Venda' precisa ser preenchido")
            return false;
        }

        if (!totalVenda) {
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

        if (cpf.length <= 11) {
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

        <View>

            <ScrollView>

                <Text style={styles.tituloTela}>Cadastro de Livro</Text>

                <Text
                    style={styles.titulo_campos}>
                    Nome do Livro:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNomeLivro(text) }} />

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
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setTotalVenda(text) }} />

                <Text
                    style={styles.titulo_campos}>
                    CPF:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setCpf(text) }} />

                <Pressable style={[styles.botao, { alignSelf: "center" }]}
                    onPress={() => concluirVenda()}>
                    <Text style={styles.texto_botao}>
                        Confirmar Venda
                    </Text>
                </Pressable>

            </ScrollView>

        </View>

    )

}

export default TelaCadVenda;