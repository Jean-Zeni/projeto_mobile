import { useState } from "react";
import { CadastroProps } from "../navigation/HomeNavigator";
import { Alert, FlatList, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import TelaLogin from "./TelaLogin";

import auth from "@react-native-firebase/auth";

const TelaCadastro = (props: CadastroProps) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    function salvar() {
        if (verificarCampos()) {
            auth()
                .createUserWithEmailAndPassword(email, senha)
                .then(() => {
                    Alert.alert("Conta",
                        "Cadastrada com sucesso")
                    props.navigation.goBack();
                })
                .catch((error) => { tratarErros(String(error)) });
        }
    }

    function verificarCampos(): boolean {
        if (email == '') {
            Alert.alert("Email em branco",
                "Digite um email")
            return false;
        }

        if (senha == '') {
            Alert.alert("Senha em branco",
                "Digite uma senha de pelo menos 6 dígitos")
            return false;
        }

        if (confSenha == '') {
            Alert.alert("Confirmação de senha em branco",
                "Digite a confirmação de senha")
            return false;
        }

        if (senha != confSenha) {
            Alert.alert("As senhas não são iguais",
                "Digite a confirmação de senha corretamente")
            return false;
        }
        return true;
    }

    function tratarErros(erro: string) {
        console.log(erro);
        if (erro.includes("[auth/invalid-email]")) {
            Alert.alert("Email inválido", "Digite um email válido"
            )
        } else if (erro.includes("[auth/weak-password]")) {
            Alert.alert("Senha fraca",
                "A senha digitada é fraca. A senha deve conter pelo menos 6 dígitos."
            )
        } else if (erro.includes("[auth/email-already-in-use]")) {
            Alert.alert("Email em uso",
                "O email inserido já foi cadastrado em outra conta."
            )
        } else {
            Alert.alert("Erro", erro)
        }
    }

    function exibirMensagemErro() {
        Alert.alert(
            'Os campos "Senha" e "Confirmar Senha" precisam ser iguais.'
        )
    }

    function cancelarCadastro() {
        props.navigation.navigate('TelaLogin')
    }

    return (
        <View style={styles.tela}>

            {/* a tag ScrollView possibilita que a tela role para baixo */}
            <ScrollView>

                <Text style={[styles.titulo1, styles.margem]}>Cadastrar-se</Text>

                {/* Subtitulo texto */}
                <Text style={[styles.titulo2, { marginTop: 10 }, styles.margem]}>E-mail:</Text>

                {/* campo de texto */}
                <TextInput
                    style={[styles.caixa_texto, styles.largura_70, { marginTop: 10 }, styles.margem]}
                    defaultValue="Digite aqui"

                    onChangeText={(text) => {
                        console.log(text);
                        setEmail(text);
                    }}
                />

                <Text style={[styles.titulo2, { marginTop: 10 }, styles.margem]}>Senha:</Text>

                <TextInput
                    style={[styles.caixa_texto, styles.largura_70, { marginTop: 10 }, styles.margem]}
                    defaultValue="Digite aqui"

                    onChangeText={(text) => {
                        console.log(text);
                        setSenha(text);
                    }}


                />

                <Text style={[styles.titulo2, { marginTop: 10 }, styles.margem]}>Confirmar senha:</Text>

                <TextInput
                    style={[styles.caixa_texto, styles.largura_70, { marginTop: 10 }, styles.margem]}
                    defaultValue="Digite aqui"

                    onChangeText={(text) => {
                        console.log(text);
                        setConfSenha(text);
                    }}


                />

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.2 } : null, { marginLeft: 40 }, { backgroundColor: 'green' }, { padding: 5 }, { borderRadius: 10 }]}
                    onPress={() => salvar()}>

                    <Text style={styles.texto_botao}>Salvar</Text>
                </Pressable>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.2 } : null, { marginLeft: 40 }, { backgroundColor: '#A10012' }, { padding: 5 }, { borderRadius: 10 }]}
                    onPress={() => { cancelarCadastro() }}>

                    <Text style={styles.texto_botao}>Cancelar</Text>
                </Pressable>

                

            </ScrollView>

        </View>

    );

}

export default TelaCadastro;