import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";


const ExemploConstrucaoCondicao = () => {
    //funciona para guardar o texto do campo
    const [frase, setFrase] = useState('bom dia');

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
                onPress={() => { exibirMensagem() }}
            >
                <Text style={styles.texto_botao}>Entrar</Text>

            </Pressable>

            {
                //Se o texto tiver mais de 10 caracteres irá construir o texto "Isso é verdade" na tela
                // frase.length >= 10 &&
                // <Text style={{fontSize: 40}}>Isso é verdade</Text>
            }

            {
                //Se o texto tiver mais de 10 caracteres irá construir o texto "Isso é verdade" na tela
                //senão irá construir o texto "condição é falsa" na tela
                // frase.length >= 10 ?
                //     <Text style={{ fontSize: 40 }}>Condição é verdade</Text>
                //     :
                //     <Text style={{ fontSize: 40 }}>Condição é falsa</Text>
            }

            {
                //Se o texto tiver mais de ou exatamente 10 caracteres irá construir o texto "Isso é verdade" 
                //na tela
                //se tiver menos de 10 caracteres irá construir o texto "condição é falsa" na tela
                //senão irá construir o texto "Campo é vazio"

                frase.length >= 10 ?
                    <Text style={{ fontSize: 40 }}>Condição é verdade</Text>
                    :
                    (frase.length > 0 ?
                        <Text style={{ fontSize: 40 }}>Condição é falsa</Text>
                        :
                        <Text style={{ fontSize: 40 }}>Campo é vazio</Text>
                    )

            }

        </View>
    );
}

export default ExemploConstrucaoCondicao;

