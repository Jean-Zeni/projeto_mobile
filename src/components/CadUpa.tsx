import { useState } from "react";
import { FlatList, Pressable, ScrollView, ScrollViewComponent, Text, TextInput, View } from "react-native"

const CadUpa = () => {

    //declaração da lista

    const [nome, setNome] = useState('');
    const [enfermidade, setEnfermidade] = useState('');
    const [idade, setIdade] = useState('');
    const [gravidade, setGravidade] = useState(1);

    const [lista, setLista] = useState([] as Paciente[]);


    return (
        <>

            <View style={[{ backgroundColor: '#DEDCD0' }, { flex: 1 }]}>

                <ScrollView style={{ margin: 10 }}>

                    <Text style={[{ color: 'black' }, { fontSize: 40 }, { textAlign: "center" }]}>
                        Fila de Atendimento
                    </Text>

                    <Text style={[{ color: "black" }, { marginTop: 25 }, { marginLeft: 10 }, { fontSize: 20 }]}>
                        Nome do paciente:
                    </Text>

                    <TextInput style={[{ backgroundColor: "white" }, { borderWidth: 1 },
                    { borderRadius: 4 }, { margin: 3 }, { color: 'black' }, { fontSize: 20 }]}
                        defaultValue="Digite aqui"

                        onChangeText={(text) => {
                            setNome(text)
                        }}
                    />

                    <Text style={[{ color: "black" }, { marginTop: 25 }, { marginLeft: 10 }, { fontSize: 20 }]}>
                        Enfermidade do paciente:
                    </Text>

                    <TextInput style={[{ backgroundColor: "white" }, { borderWidth: 1 },
                    { borderRadius: 4 }, { margin: 3 }, { color: 'black' }, { fontSize: 20 }]}
                        defaultValue="Digite aqui"

                        onChangeText={(text) => {
                            setEnfermidade(text)
                        }}
                    />

                    <Text style={[{ color: "black" }, { marginTop: 25 }, { marginLeft: 10 }, { fontSize: 20 }]}>
                        Idade do paciente:
                    </Text>

                    <TextInput style={[{ backgroundColor: "white" }, { borderWidth: 1 },
                    { borderRadius: 4 }, { margin: 3 }, { color: 'black' }, { fontSize: 20 }, { width: 120 }]}
                        defaultValue="Digite aqui"

                        onChangeText={(text) => {
                            setIdade(text)
                        }}
                    />

                    <Text style={[{ color: "black" }, { marginTop: 25 }, { marginLeft: 10 }, { fontSize: 20 }]}>
                        Grau de risco:
                    </Text>

                    <TextInput style={[{ backgroundColor: "white" }, { borderWidth: 1 },
                    { borderRadius: 4 }, { margin: 3 }, { color: 'black' }, { fontSize: 20 }, { width: 130 }]}
                        defaultValue="Digite aqui"

                        onChangeText={(text) => {
                            let grav = Number.parseInt(text);
                            setGravidade(grav)
                        }}
                    />

                    <Pressable style={[{ backgroundColor: "green" }, { marginTop: 20 }, { width: 160 }, { borderRadius: 10 }]}
                        onPress={() => {}} >

                        <Text style={[{ color: "white" }, { fontSize: 30 }, { textAlign: "center" }]}>
                            Adicionar
                        </Text>
                    </Pressable>

                </ScrollView>

            </View>


        </>
    );

}

type Paciente = {
    nome: string;
    enfermidade: string;
    idade: string;
    gravidade: number;
}

export default CadUpa;