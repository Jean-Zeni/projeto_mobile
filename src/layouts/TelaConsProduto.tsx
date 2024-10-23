import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import { Produto } from "../types/Produto";
import { ConsProdutoProps } from "../navigation/HomeNavigator";
import { Alert, FlatList, Image, Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";

const TelaConsProduto = (props: ConsProdutoProps) => {
    const [produtos, setProdutos] = useState([] as Produto[]);

    //Buscar os dados quando abrir a tela
    useEffect(() => {
        const subscribe = firestore()
            .collection('produtos')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as Produto[];

                setProdutos(data);
            });

        return () => subscribe();
    }, []);

    function deletarProduto(id: string) {
        firestore()
            .collection('produtos')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Produto", "Removido com sucesso!")
            })
            .catch((error) => console.log(error));
    }

    function alterarProduto(id: string) {
        props.navigation.navigate('TelaAlterarProduto', {id: id})
    }



    return (
        <View style={styles.tela}>

            <Text style={styles.tituloTela}>Listagem de Produtos</Text>

            <FlatList
                data={produtos}
                renderItem={(info) =>
                    <ItemProduto
                        numeroOrdem={info.index + 1}
                        prod={info.item}
                        onDeletar={deletarProduto} 
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
    prod: Produto;
    onDeletar: (id: string) => void;
    onAlterar: (id: string) => void;
}

const ItemProduto = (props: ItemProdutoProps) => {

    return (
        <View style={styles.card}>
            <View style={styles.dados_card}>
                <Text style={{ fontSize: 30, color: 'black' }}>
                    {props.numeroOrdem + ' - ' + props.prod.nome}
                </Text>
                <Text style={{ fontSize: 20 }}>
                    ID: {props.prod.id}
                </Text>
                <Text style={{ fontSize: 20 }}>
                    Código de barras: {props.prod.codigoBarras}
                </Text>
                <Text style={{ fontSize: 20 }}>
                    Preço: R${props.prod.preco.toFixed(2)}
                </Text>
            </View>

            <View style = {styles.view2}>

                <Pressable
                    onPress={() => props.onDeletar(props.prod.id)}>
                    <Text style={[styles.texto_botao_card, styles.botao_deletar]}>
                        X
                    </Text>
                </Pressable>

                <Pressable
                    //no momento este botao tem a mesma função do delete
                    onPress = {() => {props.onAlterar(props.prod.id)}}>

                    <Image
                        source={require('../images/edit48px.png')} />

                </Pressable>

            </View>
        </View>
    );

}

export default TelaConsProduto;