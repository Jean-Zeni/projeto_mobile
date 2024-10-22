import { useState } from "react";
import { CadastroProdutoProps } from "../navigation/HomeNavigator";
import firestore from "@react-native-firebase/firestore";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { Produto } from "../types/Produto";
import { styles } from "../styles/styles";


const TelaCadastroProd = (props: CadastroProdutoProps) => {

    const [nome, setNome] = useState('');
    const [codigoBarras, setCodigoBarras] = useState('');
    const [preco, setPreco] = useState('');

    function cadastrar() {

        if (verificarCampos()) {
            //cria um obj do tipo produto
            let produto = {
                nome: nome,
                codigoBarras: codigoBarras,
                preco: Number.parseFloat(preco)
            } as Produto;

            //adiciona o obj produto na tabela produtos
            firestore()
                .collection('produtos')
                .add(produto)
                .then(() => {
                    Alert.alert("Produto", "Cadastrado com sucesso!");
                    props.navigation.goBack();
                })
                .catch((error) => console.log(error));
        }

    }

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
            <Text style={styles.tituloTela}>Cadastro de Produto</Text>
            <Text
                style={styles.titulo_campos}>
                Nome:
            </Text>

            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setNome(text) }} />

            <Text
                style={styles.titulo_campos}>
                Código de Barras
            </Text>

            <TextInput
                maxLength={7}
                style={[styles.caixa_texto, { width: '60%' }]}
                onChangeText={(text) => { setCodigoBarras(text) }} />

            <Text
                style={styles.titulo_campos}>
                Preço:
            </Text>

            <TextInput
                style={[styles.caixa_texto, { width: '40%' }]}
                onChangeText={(text) => { setPreco(text) }} />

            <Pressable
                style={styles.botao}
                onPress={() => cadastrar()}>
                <Text style={styles.texto_botao}>Cadastrar</Text>
            </Pressable>

        </View>
    );
}


export default TelaCadastroProd;