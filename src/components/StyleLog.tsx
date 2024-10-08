import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Pressable } from 'react-native';
import { styles } from '../styles/styles';

const StyleLog = () => {

    return (
        <ScrollView>
            <Text style={[styles.titulo1, styles.margem]}>Login</Text>

            <View>

                <Text style={[styles.titulo2, { marginTop: 20 }, styles.margem]}>Nome:</Text>

                <TextInput
                    style={[styles.caixa_texto, styles.largura_70, { marginTop: 10 }, styles.margem]}
                    defaultValue="Digite aqui"
                />

                <Text style={[styles.titulo2, { marginTop: 20 }, styles.margem]}>E-mail:</Text>

                <TextInput
                    style={[styles.caixa_texto, styles.largura_70, { marginTop: 10 }, styles.margem]}
                    defaultValue="Digite aqui"
                />

                <Pressable
                    style={[{ backgroundColor: 'orange' }, { padding: 5 }, { borderRadius: 10 }]}>
                    <Text style={styles.texto_botao}>Entrar</Text>
                </Pressable>



            </View>

            <View style={[styles.view2, { marginTop: 70 }]} >
                <Pressable
                    style={[{ backgroundColor: 'orange' }, { padding: 5 }, { borderRadius: 10 }]}>
                    <Text style={styles.texto_botao}>Cadastrar-se</Text>
                </Pressable>

                <Pressable
                    style={[{ backgroundColor: 'orange' }, { padding: 5 }, { borderRadius: 10 }]}>
                    <Text style={styles.texto_botao}>Esqueceu a senha?</Text>
                </Pressable>
            </View>


        </ScrollView>
    )

}
export default StyleLog;
