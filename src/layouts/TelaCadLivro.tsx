import { useState } from "react";
import { CadLivroProps } from "../navigation/HomeNavigator";
import firestore from "@react-native-firebase/firestore";
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Produto } from "../types/Produto";
import { styles } from "../styles/styles";


const TelaCadLivro = (props: CadLivroProps) => {

    const [nome, setNome] = useState('');
    const [nomeAutor, setNomeAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [editora, setEditora] = useState('');
    const [codigoBarras, setCodigoBarras] = useState('');
    const [preco, setPreco] = useState('');

    function cadastrar() {

        if (verificarCampos()) {
            //cria um obj do tipo produto
            let produto = {
                nome: nome,
                nomeAutor: nomeAutor,
                genero: genero,
                editora: editora,
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
            Alert.alert("Nome do livro em branco",
                "Digite um nome")
            return false;
        }

        if (!nomeAutor) {
            Alert.alert("Nome do autor em branco",
                "Digite um nome")
            return false;
        }

        if (!editora) {
            Alert.alert("Nome da editora em branco",
                "Digite uma editora")
            return false;
        }

        if (!genero) {
            Alert.alert("Gênero em branco",
                "Informe um gênero")
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
                <Text style={styles.tituloTela}>Cadastro de Livro</Text>

                <Text
                    style={styles.titulo_campos}>
                    Nome:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNome(text) }} />

                <Text
                    style={styles.titulo_campos}>
                    Autor:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNomeAutor(text) }} />

                <Text
                    style={styles.titulo_campos}>
                    Gênero:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setGenero(text) }} />

                <Text
                    style={styles.titulo_campos}>
                    Editora:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setEditora(text) }} />

                <Text
                    style={styles.titulo_campos}>
                    Código de Barras:
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

            </ScrollView>
        </View>
    );
}


export default TelaCadLivro;