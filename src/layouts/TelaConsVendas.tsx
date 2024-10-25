import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import { Venda } from "../types/Venda";
import { TelaConsVendasProps } from "../navigation/HomeNavigator";
import { Alert, FlatList, Image, Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";

const TelaConsVendas = (props: TelaConsVendasProps) => {

    const [vendas, setVendas] = useState([] as Venda[]);

    //Buscar os dados quando abrir a tela
    useEffect(() => {
        const subscribe = firestore()
            .collection('vendas')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as Venda[];

                setVendas(data);
            });

        return () => subscribe();
    }, []);

    function deletarVenda(id: string) {
        firestore()
            .collection('produtos')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Livro", "Removido com sucesso!")
            })
            .catch((error) => console.log(error));
    }

    function alterarProduto(id: string) {
        props.navigation.navigate('TelaAlterarProduto', { id: id })
    }



    return (
        <View style={styles.tela}>

            <Text style={styles.tituloTela}>Listagem de Vendas</Text>

            <FlatList
                data={vendas}
                renderItem={(info) =>
                    <ItemProduto
                        numeroOrdem={info.index + 1}
                        vend={info.item}
                        onDeletar={deletarVenda}
                        onAlterar={alterarProduto}
                    />
                }
            />

            <View
                style={styles.centralizar}>
                <Pressable
                    style={[styles.botao, { width: '40%' }]}
                    onPress={() => { props.navigation.goBack() }}>
                    <Text style={styles.texto_botao}>Voltar</Text>
                </Pressable>

            </View>

        </View>
    );

}

type ItemProdutoProps = {
    numeroOrdem: number,
    vend: Venda;
    onDeletar: (id: string) => void;
    onAlterar: (id: string) => void;
}

const ItemProduto = (props: ItemProdutoProps) => {

    return (
        <View style={styles.card}>
            <View style={styles.dados_card}>
                <Text style={{ fontSize: 30, color: 'black' }}>
                    {props.numeroOrdem + ' - ' + props.vend.nomeLivro}
                </Text>
                <Text style={{ fontSize: 20 }}>
                    Nome do livro: {props.vend.nomeLivro}
                </Text>
                <Text style={{ fontSize: 20 }}>
                    Data da Venda: {props.vend.dataVenda}
                </Text>
                <Text style={{ fontSize: 20 }}>
                    CPF: {props.vend.cpf}
                </Text>
                <Text style={{ fontSize: 20 }}>
                    Valor Total {props.vend.totalVenda}
                </Text>
            </View>

            <View style={styles.view2}>

                <Pressable
                    onPress={() => props.onDeletar(props.vend.id)}>
                    <Text style={[styles.texto_botao_card, styles.botao_deletar]}>
                        X
                    </Text>
                </Pressable>

                <Pressable
                    //no momento este botao tem a mesma função do delete
                    onPress={() => { props.onAlterar(props.vend.id) }}>

                    <Image
                        source={require('../images/edit48px.png')} />

                </Pressable>

            </View>
        </View>
    );

}

export default TelaConsVendas;