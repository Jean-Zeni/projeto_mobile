import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Animal } from '../types/Animal'
import { styles } from "../styles/styles";

type ListaAnimaisProps = {
    listaAnimais: Animal[]
}

const ListaAnimais = (props: ListaAnimaisProps) => {
    return (
        <>
            <FlatList
                data={props.listaAnimais}
                renderItem={(info) => {
                    return (
                        <Text style={styles.item3}>
                            {(info.index + 1) + ' - '
                                + info.item.nome + ' ' + info.item.especie}
                        </Text>
                    )
                }}

            />

            <FlatList
                data={props.listaAnimais}
                renderItem={(info) => <ItemLista animal={info.item} />} />

        </>
    )
}

type ItemProps = {
    animal: Animal
}

const ItemLista = (props: ItemProps) => {
    return (
        <View>
            <Text style = {styles.item4}>
                {props.animal.especie + ' ' + props.animal.nome}
            </Text>
        </View>
    )
}

export default ListaAnimais;