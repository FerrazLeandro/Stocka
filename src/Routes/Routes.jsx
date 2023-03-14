import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Inventario from '../Pages/Inventario/Inventario'

const Stack = createNativeStackNavigator();

export default function Routes() {

    return(
        <Stack.Navigator>
            <Stack.Screen name="/Login" component={Login} options={{title: 'Login', headerShown: false}} />
            <Stack.Screen name="/" component={Home} options={{title: 'Home', headerShown: false}} />
            <Stack.Screen name="/Inventario" component={Inventario} options={{title: 'Inventario', headerShown: false}} />
            {/* <Stack.Screen name="/ColetaPreco" component={ColetaPreco} options={{title: 'Coleta de Preços', headerShown: false}} />
            <Stack.Screen name="/BuscaPreco" component={BuscaPreco} options={{title: 'Busca Preço', headerShown: false}} />
            <Stack.Screen name="/ListaPresente" component={ListaPresente} options={{title: 'Lista de Presentes', headerShown: false}} />
            <Stack.Screen name="/ListaProduto" component={ListaProduto} options={{title: 'Lista de Produtos', headerShown: false}} />
            <Stack.Screen name="/ControleValidade" component={ControleValidade} options={{title: 'Controle de Validade', headerShown: false}} /> */}
        </Stack.Navigator>
    )
}