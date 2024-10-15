import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import ExemploStylesText from '../components/ExemploStyleText';
import ExemploStylesView from '../components/ExemploStyleView';
import CalcularAprovacao from '../components/CalculadoraAprovacao';
import ListaSimples from '../components/ListaSimples';
import { Animal } from '../types/Animal';
import ListaAnimais from '../components/ListaAnimais';
import { Produto } from '../types/Produto';
import ListaProdutos from '../components/ListaProdutos';
import ExemploState from '../components/ExemploState';
import ExemploEvento from '../components/ExemploEvento';
import ExemploConstrucaoCondicao from '../components/ExemploConstrucaoCondicao';

const TelaPrincipal = (props: PrincipalProps) => {

    let listaPessoas = ['Alfred', 'Jean', 'Junin', 'Cadu'] as string[];

    let animal1 = { nome: 'Roberto', especie: 'Baleia' } as Animal
    let animal2 = { nome: 'Júlio', especie: 'Lagosta' } as Animal
    let animal3 = { nome: 'Alberta', especie: 'Jabuti' } as Animal
    let animal4 = { nome: 'Aline', especie: 'Tamanduá' } as Animal

    let listaAnimais = [animal1, animal2, animal3, animal4] as Animal[]

    let produto1 = { nome: 'Kinder Ovo', codBarras: '43215678', preco: 1000.00 } as Produto
    let produto2 = { nome: 'Miojo', codBarras: '12123456', preco: 2.00 } as Produto
    let produto3 = { nome: 'Colgate', codBarras: '89896767', preco: 5.00 } as Produto
    let produto4 = { nome: 'Bife', codBarras: '12344321', preco: 20.00 } as Produto

    let listaProdutos = [produto1, produto2, produto3, produto4] as Produto[]


    return (
        <View
            style={[styles.tela]}>

            <Pressable
                style={{ backgroundColor: 'green' }}
                onPress={() => { props.navigation.goBack()}}>
                <Text style={{ fontSize: 40 }}>Voltar</Text>
            </Pressable>

            <ExemploConstrucaoCondicao />
        </View>
    );
}

export default TelaPrincipal;
