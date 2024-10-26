import { useState } from "react";
import { CadClienteProps } from "../navigation/HomeNavigator";
import { Cliente } from "../types/Cliente";
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import firestore from "@react-native-firebase/firestore";


const TelaCadCliente = (props: CadClienteProps) => {

    //declaração de variáveis
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')

    function cadCliente() {

        if (verificarCampos()) {

            let cliente = {
                nome: nome,
                email: email,
                cpf: cpf
            } as Cliente;

            //adiciona o cliente produto na tabela produtos
            firestore()
                .collection('clientes')
                .add(cliente)
                .then(() => {
                    Alert.alert("Cliente", "Cadastrado com sucesso!");
                    props.navigation.goBack();
                })
                .catch((error) => console.log(error));
        }
    }

    function verificarCampos() {
        if (!nome) {
            Alert.alert("Campo Vazio",
                "O campo 'Nome do Cliente' não pode estar vazio"
            );
            return false;
        }
        if (!cpf) {
            Alert.alert("Campo Vazio",
                "O campo 'CPF' não pode estar vazio"
            );
            return false;
        }
        if (cpf.length != 11) {
            Alert.alert("Número Inaceito",
                "O campo 'CPF' não pode conter mais ou menos que 11 caracteres"
            );
            return false;
        }
        if (!cpf.match(/^\d+$/)) {
            Alert.alert("CPF Inaceito",
                "O campo 'CPF' deve conter apensa números"
            );
            return false;
        }
        return true;
    }

    return (

        <View>

            <ScrollView>

                <Text style={styles.titulo_campos}>
                    Nome do Cliente:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNome(text) }} />

                <Text style={styles.titulo_campos}>
                    Email:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setEmail(text) }} />

                <Text style={styles.titulo_campos}>
                    CPF:
                </Text>

                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setCpf(text) }} />

                <Pressable
                    style={[styles.botao, { alignSelf: "center" }]}
                    onPress={() => cadCliente()}>

                    <Text style={[styles.texto_botao, { textAlign: "center" }]}>
                        Cadastrar Cliente
                    </Text>

                </Pressable>

            </ScrollView>

        </View>

    )

}

export default TelaCadCliente;