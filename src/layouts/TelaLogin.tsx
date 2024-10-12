import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { LoginProps, PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import ExemploStylesText from '../components/ExemploStyleText';
import ExemploStylesView from '../components/ExemploStyleView';
import StyleLog from '../components/StyleLog';
import CalcularAprovacao from '../components/CalculadoraAprovacao';

const TelaLogin = (props: LoginProps) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function exibirAlerta() {
        Alert.alert(
            'Email: ' + email
        )
    }

    function exibirMensagem() {
        Alert.alert(
            'Dados',
            'E-mail: ' + email +
            '\nSenha: ' + senha
        );

        props.navigation.navigate('TelaPrincipal');
    }

    function fazerCadastro(){
        props.navigation.navigate('TelaCadastro');
    }

    return (

        <View style={styles.tela}>

            <Image
                style={styles.imagem}
                source={require('../images/rebels512px.png')} />

            <ScrollView>

                <Text style={[styles.titulo1, styles.margem]}>Login</Text>

                <View>

                    <Text style={[styles.titulo2, { marginTop: 20 }, styles.margem]}>E-mail:</Text>

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
                        onPress={() => { exibirMensagem() }}>

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
                        style={(state) => [styles.botao, state.pressed ? { opacity: 0.2 } : null, { backgroundColor: 'orange' }, { padding: 5 }, { borderRadius: 10 }]}>
                        <Text style={styles.texto_botao}>Esqueceu a senha?</Text>
                    </Pressable>
                </View>


            </ScrollView>
        </View>
    );
}

export default TelaLogin;