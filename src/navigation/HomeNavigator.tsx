import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";
import TelaCadastro from "../layouts/TelaCadastro";
import TelaExemplos from "../layouts/TelaExemplos";
import TelaExecExemplos from "../layouts/TelaExecExemplos";
import TelaCadastroProd from "../layouts/TelaCadastroProd";
import CadUpa from "../components/CadUpa";
import TelaConsProduto from "../layouts/TelaConsProduto";
import TelaAlterarProduto from "../layouts/TelaAlterarProduto";

type RootStackParamList = {
    TelaPrincipal: { texto: string };
    TelaLogin: undefined;
    TelaCadastro: undefined;
    TelaCadastroProd: undefined;
    TelaExemplos: undefined;
    TelaConsProduto: undefined;
    TelaAlterarProduto: { id: string };
    TelaExecExemplos: { tipoComponente: number };
    //modelo: telaMod: {valor: number}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaConsProduto" //nome da tela inicial
            screenOptions={{ headerShown: false }} //headerShown define se o cabeçalho irá ser exibido
        >
            {/* define uma tela dando um nome (igual ao RootStackParamList) e qual o componente será carregado */}
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />

            <Stack.Screen name="TelaLogin" component={TelaLogin} />

            <Stack.Screen name="TelaCadastro" component={TelaCadastro} />

            <Stack.Screen name="TelaExemplos" component={TelaExemplos} />

            <Stack.Screen name="TelaExecExemplos" component={TelaExecExemplos} />

            <Stack.Screen name="TelaCadastroProd" component={TelaCadastroProd} />

            <Stack.Screen name="TelaConsProduto" component={TelaConsProduto} />

            <Stack.Screen name="TelaAlterarProduto" component={TelaAlterarProduto} />

        </Stack.Navigator>
    );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList,
    'TelaPrincipal'>;

type LoginProps = NativeStackScreenProps<RootStackParamList,
    'TelaLogin'>;

type CadastroProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastro'>;

type TelaExemploProps = NativeStackScreenProps<RootStackParamList,
    'TelaExemplos'>;

type TelaExecExemploProps = NativeStackScreenProps<RootStackParamList,
    'TelaExecExemplos'>;

type CadastroProdutoProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastroProd'>;

type ConsProdutoProps = NativeStackScreenProps<RootStackParamList,
    'TelaConsProduto'>;

type AlterarProdutoProps = NativeStackScreenProps<RootStackParamList,
    'TelaAlterarProduto'>;

export default HomeNavigator;

export type {
    PrincipalProps,
    LoginProps,
    CadastroProps,
    TelaExemploProps,
    TelaExecExemploProps,
    CadastroProdutoProps,
    ConsProdutoProps,
    AlterarProdutoProps
};