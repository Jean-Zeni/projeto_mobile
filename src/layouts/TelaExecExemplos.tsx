import { ScrollView, Text, View } from "react-native";
import { TelaExecExemploProps } from "../navigation/HomeNavigator"
import { styles } from "../styles/styles";
import ExemploCalculo from "../components/ExemploCalculo";
import ExemploEvento from "../components/ExemploEvento";
import ExemploStylesText from "../components/ExemploStyleText";
import ExemploStylesView from "../components/ExemploStyleView";
import Exemplo1 from "../components/Exemplo1";


const TelaExecExemplos = (props: TelaExecExemploProps) => {

    return (
      
        <View
            style={[styles.tela]}>

        {
            props.route.params.tipoComponente == 1 &&
            <ExemploCalculo valor1={2} valor2={1}/>
        }

        {
            props.route.params.tipoComponente == 2 &&
            <ExemploEvento/>
        }

        {
            props.route.params.tipoComponente == 3 &&
            <ExemploStylesText/>
        }

        {
            props.route.params.tipoComponente == 4 &&
            <ExemploStylesView/>
        }

        {
            props.route.params.tipoComponente == 5 &&
            <Exemplo1/>
        }

        </View>

    );

}

export default TelaExecExemplos