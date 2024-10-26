import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';

const TelaPrincipal = (props: PrincipalProps) => {

    return (
        <View
            style={[styles.view3, { backgroundColor: "#5E0000" }]}>

            <ScrollView>

                <Pressable
                    style={[styles.botao]}
                    onPress={() => { props.navigation.goBack() }}>
                    <Text style={styles.texto_botao}>Voltar</Text>
                </Pressable>

                <Pressable
                    style={styles.botao}
                    onPress={() => { props.navigation.navigate('TelaCadLivro') }}>
                    <Text style={styles.texto_botao}>Cadastrar Novo Livro</Text>
                </Pressable>

                <Pressable
                    style={styles.botao}
                    onPress={() => { props.navigation.navigate('TelaConsLivro') }}>
                    <Text style={styles.texto_botao}>Consultar Produtos</Text>
                </Pressable>

                <Pressable
                    style={styles.botao}
                    onPress={() => { props.navigation.navigate('TelaConsVendas') }}>
                    <Text style={styles.texto_botao}>Vendas Efetuadas</Text>
                </Pressable>

                <Pressable
                    style={styles.botao}
                    onPress={() => { props.navigation.navigate('TelaCadVenda') }}>
                    <Text style={styles.texto_botao}>Cadastrar Venda</Text>
                </Pressable>

                <Pressable
                    style={styles.botao}
                    onPress={() => { props.navigation.navigate('TelaCadCliente') }}>
                    <Text style={styles.texto_botao}>Cadastrar Cliente</Text>
                </Pressable>

            </ScrollView>


        </View>
    );
}

export default TelaPrincipal;
