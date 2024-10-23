import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";

type StateProps = {
    onClick: (texto: string) => void;
}

const ExemploState = (props: StateProps) => {
    //funciona para guardar o texto do campo
    const [frase, setFrase] = useState('bom dia');
    const [nome, setNome] = useState('');

    //não funciona para guardar o texto do campo
    let fraseVariavel = '' as string;

    function exibirMensagem() {
        Alert.alert(
            'Valores',
            'Frase: ' + frase +
            '\nFrase Variável: ' + fraseVariavel
        )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', }}>

            <Text
                style={{ fontSize: 40 }}>
                Frase
            </Text>

            <TextInput
                style={[styles.caixa_texto, { width: 150 }]}
                onChangeText={(text) => {
                    //exibe o texto no terminal
                    console.log(text);
                    //Guarda no state 
                    setFrase(text);
                    //guarda ma variável (não funciona)
                    fraseVariavel = text
                }}
            />

            <Pressable
                style={(state) => [styles.botao, state.pressed && styles.click]}
                onPress={() => { props.onClick(frase) }}
            >
                <Text style={styles.texto_botao}>Entrar</Text>

            </Pressable>

        </View>
    );
}

export default ExemploState;

