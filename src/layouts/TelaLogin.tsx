import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { LoginProps, PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import auth from "@react-native-firebase/auth";

const TelaLogin = (props: LoginProps) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function logar() {
        if (verificarCampos()) {
            auth().signInWithEmailAndPassword(email, senha).then(() => {
                props.navigation.navigate('TelaPrincipal', { texto: '' })
            })
                .catch((error) => tratarErros(String(error)))
        }
    }

    function verificarCampos() {
        if (email == '') {
            Alert.alert("Email em branco", "Digite um e-mail")
            return false;
        }
        if (senha == '') {
            Alert.alert("Senha em branco", "Digite uma senha")
        }

        return true;
    }

    function tratarErros(erro: string) {
        console.log(erro);

        if (erro.includes("[auth/invalid-email]")) {
            Alert.alert("Email inválido", "Digite um e-mail válido")
        } else if (erro.includes("[ INVALID_LOGIN_CREDENTIALS ]")) {
            Alert.alert("Login ou senha incorretos", "")
        } else if (erro.includes("[auth/invalid-credential]")) {
            Alert.alert("Login ou senha incorretos", "")
        } else {
            Alert.alert("Erro", erro)
        }
    }

    function redefinirSenha() {
        if (email == "") {
            Alert.alert("Email em branco", "Preencha o email")
            return
        }

        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redefinir senha",
                "Enviamos um e-mail para você redefinir sua senha"
            )).catch((error) => console.log(error))
    }


    // function exibirAlerta() {
    //     Alert.alert(
    //         'Email: ' + email
    //     )
    // }

    // function exibirMensagem() {
    //     Alert.alert(
    //         'Dados',
    //         'E-mail: ' + email + //login
    //         '\nSenha: ' + senha
    //     );

    //     props.navigation.navigate('TelaPrincipal',
    //         { texto: email });

    // }

    function fazerCadastro() {
        props.navigation.navigate('TelaCadastro');
    }

    return (

        <View style={styles.tela}>

            <ScrollView>

                <Text style={[styles.titulo1, styles.margem]}>Login</Text>

                <View>

                    <Text style={[styles.titulo2, { marginTop: 20 }, styles.margem]}>Email:</Text>

                    <TextInput
                        style={[styles.caixa_texto, styles.largura_70, { marginTop: 10 }, styles.margem]}
                        defaultValue="Digite aqui"

                        onChangeText={(text) => {
                            console.log(text);
                            setEmail(text);
                        }}
                    />

                    <Text style={[styles.titulo2, { marginTop: 20 }, styles.margem]}>Senha:</Text>

                    <TextInput
                        style={[styles.caixa_texto, styles.largura_70, { marginTop: 10 }, styles.margem]}
                        defaultValue="Digite aqui"

                        onChangeText={(text) => {
                            console.log(text);
                            setSenha(text);
                        }}
                    />

                    <Pressable
                        style={(state) => [styles.botao, state.pressed ? { opacity: 0.2 } : null, { marginLeft: 40 }, { backgroundColor: 'green' }, { padding: 5 }, { borderRadius: 10 }]}
                        onPress={() => { logar() }}>

                        <Text style={styles.texto_botao}>Entrar</Text>
                    </Pressable>



                </View>

                <View style={[styles.view2, { marginTop: 20 }]} >
                    <Pressable
                        style={(state) => [styles.botao, state.pressed ? { opacity: 0.2 } : null, { backgroundColor: 'orange' }, { padding: 5 }, { borderRadius: 10 }]}
                        onPress={() => { fazerCadastro() }}>
                        <Text style={styles.texto_botao}>Cadastrar-se</Text>
                    </Pressable>

                    <Pressable
                        style={(state) => [styles.botao, state.pressed ? { opacity: 0.2 } : null, { backgroundColor: 'orange' }, { padding: 5 }, { borderRadius: 10 }]}
                        onPress={() => { redefinirSenha() }}>
                        <Text style={styles.texto_botao}>Esqueceu a senha?</Text>
                    </Pressable>
                </View>


            </ScrollView>
        </View>
    );
}

export default TelaLogin;