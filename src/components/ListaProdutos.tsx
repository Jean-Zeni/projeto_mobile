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
                            {info.item.nome + '\n' + info.item.codBarras + '\n' + info.item.preco.toFixed(2)}
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