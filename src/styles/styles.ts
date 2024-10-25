import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tela: {
        flex: 4,
        backgroundColor: '#DEDCD0'
    },
    titulo1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black'
    },
    titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: '#2E2E2E',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10,
        width: 160
    },

    texto_botao: {
        fontSize: 20,
        color: 'white'
    },

    caixa_texto: {
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },

    largura_70: {
        width: '70%'
    },

    imagem_200: {
        width: 200,
        height: 200
    },

    imagem: {
        width: 300,
        height: 300,
        right: -42
    },

    margem: {
        marginLeft: 10
    },

    view2: {
        margin: 10,
        flex: 1,
        flexDirection: "row",
        gap: 10,
        left: 20
    },

    view3: {
        flex: 1,
        flexDirection: "column",
        gap: 10,
        alignItems: "center"
    },

    item: {
        padding: 10,
        fontSize: 25,
        color: 'red',
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10,
        margin: 5
    },

    item2: {
        padding: 10,
        fontSize: 25,
        color: 'green',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10,
        margin: 5
    },

    item3: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'red'
    },

    item4: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'green'
    },

    item5: {
        padding: 20,
        fontSize: 14,
        width: 350,
        color: 'green',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20
    },

    click: {
        opacity: 0.5
    },

    tituloTela: {
        color: "black",
        fontSize: 30,
        fontStyle: "italic",
        textAlign: "center"
    },

    titulo_campos: {
        color: "black",
        fontSize: 20,
        marginTop: 10
    },

    centralizar: {
        alignItems: "center"
    },

    card: {
        backgroundColor: "#D14F39",
        borderColor: "black",
        borderWidth: 1,
        margin: 5
    },

    dados_card: {
        color: "black",
        gap: 5
    },

    botao_deletar: {
        backgroundColor: "red",
        margin: 2,
        borderRadius: 10,
        width: 40
    },

    texto_botao_card: {
        fontSize: 30,
        color: "black",
        textAlign: "center"
    },

    botao_alterar: {
        backgroundColor: "#DECEA7",
        margin: 2,
        borderRadius: 10,
        width: 40
    }
});

export { styles };