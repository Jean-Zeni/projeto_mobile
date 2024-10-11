import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";


const ExemploEvento = () => {
    function exibirMensagem() {
        console.log('Isso é um log acionado pelo clique');

        Alert.alert('Título',
            'Isso é uma mensagem acionada pelo clique.');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Pressable
                style = {({pressed}) => [styles.botao, pressed && styles.click]}
                onPress = {() => {exibirMensagem()}}>

                <Text style = {styles.texto_botao}>Gerar Mensagem</Text>
            </Pressable>
        </View>
    )
}
export default ExemploEvento;