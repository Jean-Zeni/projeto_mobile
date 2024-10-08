import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import ExemploStylesText from '../components/ExemploStyleText';
import ExemploStylesView from '../components/ExemploStyleView';
import StyleLog from '../components/StyleLog';

const TelaLogin = () => {



    return (

        <View style={styles.tela}>

            <Image
                style={styles.imagem}
                source={require('../images/rebels512px.png')} />

            <StyleLog />
        </View>
    );
}

export default TelaLogin;