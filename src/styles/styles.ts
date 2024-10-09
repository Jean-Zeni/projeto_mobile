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
    }

});

export {styles};