import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";
import TelaCadastro from "../layouts/TelaCadastro";
import TelaExemplos from "../layouts/TelaExemplos";
import TelaExecExemplos from "../layouts/TelaExecExemplos";
import TelaAlterarProduto from "../layouts/TelaAlterarProduto";
import TelaCadLivro from "../layouts/TelaCadLivro";
import TelaConsLivro from "../layouts/TelaConsLivro";
import TelaCadVenda from "../layouts/TelaCadVenda";

type RootStackParamList = {
    TelaPrincipal: { texto: string };
    TelaCadVenda: undefined;
    TelaLogin: undefined;
    TelaCadastro: undefined;
    TelaCadLivro: undefined;
    TelaExemplos: undefined;
    TelaConsLivro: undefined;
    TelaConsVendas: undefined;
    TelaAlterarProduto: { id: string };
    TelaExecExemplos: { tipoComponente: number };
    //modelo: telaMod: {valor: number}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaCadVenda" //nome da tela inicial
            screenOptions={{ headerShown: false }} //headerShown define se o cabeçalho irá ser exibido
        >
            {/* define uma tela dando um nome (igual ao RootStackParamList) e qual o componente será carregado */}
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />

            <Stack.Screen name="TelaLogin" component={TelaLogin} />

            <Stack.Screen name="TelaCadastro" component={TelaCadastro} />

            <Stack.Screen name="TelaExemplos" component={TelaExemplos} />

            <Stack.Screen name="TelaExecExemplos" component={TelaExecExemplos} />

            <Stack.Screen name="TelaCadLivro" component={TelaCadLivro} />

            <Stack.Screen name="TelaCadVenda" component={TelaCadVenda} />

            <Stack.Screen name="TelaConsLivro" component={TelaConsLivro} />

            <Stack.Screen name="TelaAlterarProduto" component={TelaAlterarProduto} />

        </Stack.Navigator>
    );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList,
    'TelaPrincipal'>;

type TelaConsVendasProps = NativeStackScreenProps<RootStackParamList,
    'TelaConsVendas'>;
    
type CadVendaProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadVenda'>;

type LoginProps = NativeStackScreenProps<RootStackParamList,
    'TelaLogin'>;

type CadastroProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastro'>;

type TelaExemploProps = NativeStackScreenProps<RootStackParamList,
    'TelaExemplos'>;

type TelaExecExemploProps = NativeStackScreenProps<RootStackParamList,
    'TelaExecExemplos'>;

type CadLivroProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadLivro'>;

type ConsLivroProps = NativeStackScreenProps<RootStackParamList,
    'TelaConsLivro'>;

type AlterarProdutoProps = NativeStackScreenProps<RootStackParamList,
    'TelaAlterarProduto'>;

export default HomeNavigator;

export type {
    CadVendaProps,
    PrincipalProps,
    LoginProps,
    CadastroProps,
    TelaExemploProps,
    TelaExecExemploProps,
    CadLivroProps,
    ConsLivroProps,
    AlterarProdutoProps,
    TelaConsVendasProps
};