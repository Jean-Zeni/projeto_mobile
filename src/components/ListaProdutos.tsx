import { FlatList, Text, View } from "react-native"
import { Produto } from "../types/Produto"
import { styles } from "../styles/styles"

type ListaProdsProps = {
    listaProdutos: Produto[]
}

const ListaProdutos = (props: ListaProdsProps) => {
    return (
        <>

            <Text style={styles.titulo1}>
                PRODUTOS
            </Text>

            <FlatList
                data={props.listaProdutos}
                renderItem={(info) => {
                    return (
                        <Text style={styles.item5}>
                            {info.item.nome + ' ' + info.item.codBarras + ' ' + info.item.preco}
                        </Text>
                    )
                }}

            />
        </>
    )
}

type ItemProps = {
    produto: Produto
}


export default ListaProdutos;