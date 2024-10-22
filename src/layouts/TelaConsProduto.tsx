import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import { Produto } from "../types/Produto";
import { ConsProdutoProps } from "../navigation/HomeNavigator";
import { FlatList, Text, View } from "react-native";
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

    return (
        <View style={styles.tela}>

            <Text style={styles.tituloTela}>Listagem de Produtos</Text>

            <FlatList
                data={produtos}
                renderItem={(info) =>
                    <ItemProduto
                        numeroOrdem={info.index + 1}
                        prod={info.item} />
                }
            />

            <View
            style = {styles.centralizar}>
                <Pressable
                    style={[styles.botao, {width: '40%'}]}
                    onPress={}                
                />

            </View>

        </View>
    )


}

export default TelaConsProduto;