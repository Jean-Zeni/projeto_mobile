import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";
import TelaCadastro from "../layouts/TelaCadastro";

type RootStackParamList = {
    TelaPrincipal: undefined;
    TelaLogin: undefined;
    TelaCadastro: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaLogin" //nome da tela inicial
            screenOptions={{ headerShown: false }} //headerShown define se o cabeçalho irá ser exibido
        >
            {/* define uma tela dando um nome (igual ao RootStackParamList) e qual o componente será carregado */}
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />

            <Stack.Screen name="TelaLogin" component={TelaLogin} />

            <Stack.Screen name="TelaCadastro" component={TelaCadastro} /> 

        </Stack.Navigator>
    );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList,
    'TelaPrincipal'>;

type LoginProps = NativeStackScreenProps<RootStackParamList,
    'TelaLogin'>;

type CadastroProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastro'>;

export default HomeNavigator;

export type {
    PrincipalProps,
    LoginProps,
    CadastroProps
};