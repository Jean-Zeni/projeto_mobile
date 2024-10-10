import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { styles } from "../styles/styles";

type ListaSimplesProps = {
    listaPessoas: string[]
}

const ListaSimples = (props: ListaSimplesProps) => {
    return (
        <FlatList
            data={props.listaPessoas}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.item}>
                        Nome: {item}
                    </Text>
                )

            }}

        />
    )
}

type ItemProps = {
    nome: string
}

const ItemSimples = (props: ItemProps) => {
    return (
        <View>
            <Text style={styles.item2}>
                {props.nome}
            </Text>
        </View>
    );
}

export default ListaSimples;