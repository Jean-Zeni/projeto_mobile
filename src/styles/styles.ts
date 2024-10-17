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
        backgroundColor: 'green',
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
        marginTop: 100,
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
    }
});

export { styles };