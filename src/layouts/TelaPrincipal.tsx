import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import ExemploStylesText from '../components/ExemploStyleText';
import ExemploStylesView from '../components/ExemploStyleView';

const TelaPrincipal = (props: PrincipalProps) => {
    return (
        <View 
            style={styles.tela}>
            {/* <HelloWorld /> */}
            {/* <Exemplo1/>*/}
            {/* <ExemploStylesText/> */}
            <ExemploStylesView/>
        </View>
    );
}

export default TelaPrincipal;
