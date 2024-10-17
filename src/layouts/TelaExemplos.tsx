import { Pressable, ScrollView, Text, View } from "react-native"
import { TelaExemploProps } from "../navigation/HomeNavigator";
import { styles } from "../styles/styles";

const TelaExemplos = (props: TelaExemploProps) => {

function voltar(){
    props.navigation.goBack();
}

return(

    <View style={styles.view3}>

        <ScrollView>

            <Pressable onPress = {() => {props.navigation.navigate('TelaExecExemplos', {tipoComponente: 1})}}>
                <Text style={[styles.texto_botao, styles.botao, {backgroundColor: "orange"}]}>Exemplo 1</Text>
            </Pressable>
            
            <Pressable onPress = {() => {props.navigation.navigate('TelaExecExemplos', {tipoComponente: 2})}}>
                <Text style={[styles.texto_botao, styles.botao, {backgroundColor: "orange"}]}>Exemplo 2</Text>
            </Pressable>

            <Pressable onPress = {() => {props.navigation.navigate('TelaExecExemplos', {tipoComponente: 3})}}>
                <Text style={[styles.texto_botao, styles.botao, {backgroundColor: "orange"}]}>Exemplo 3</Text>
            </Pressable>

            <Pressable onPress = {() => {props.navigation.navigate('TelaExecExemplos', {tipoComponente: 4})}}>
                <Text style={[styles.texto_botao, styles.botao, {backgroundColor: "orange"}]}>Exemplo 4</Text>
            </Pressable>
            
            <Pressable onPress = {() => {props.navigation.navigate('TelaExecExemplos', {tipoComponente: 5})}}>
                <Text style={[styles.texto_botao, styles.botao, {backgroundColor: "orange"}]}>Exemplo 5</Text>
            </Pressable>

            <Pressable onPress={() => { voltar() }}>
                <Text style={[styles.texto_botao, styles.botao, {backgroundColor: "#B30606"}, {textAlign: "center"}]}>Voltar</Text>
                
            </Pressable>

        </ScrollView>

    </View>

);

}

export default TelaExemplos;