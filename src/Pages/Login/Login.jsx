import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Text } from "@react-native-material/core";
import { MaterialIcons } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebaseconfig';

export default function Login({ navigation }) {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const auth = getAuth();

    const loginFirebase = () => {
        signInWithEmailAndPassword(auth, login, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate("/");
            })
            .catch((error) => {
                alert(" Usuário e/ou senha inválido(s)")
            });
    };

    return (
        <View
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >

            <ImageBackground
                source={require('../../../assets/StockaBackground.png')}
                resizeMode="cover"
                style={styles.background}
            >

                <Image
                    style={styles.logo}
                    source={require('../../../assets/StokaLogo.png')}
                />

                <ImageBackground
                    source={require('../../../assets/LosangoBg.png')}
                    style={styles.losango}
                >

                    <Text
                        style={styles.text}
                        variant="h6"
                    >Bem-vindo ao</Text>

                    <Image
                        style={styles.stocka}
                        source={require('../../../assets/Stoka.png')}
                    />

                    <Text
                        style={styles.text}
                        variant="h6"
                    >Faça login para continuar</Text>

                    <TextInput
                        style={styles.input}
                        variant="standard"
                        label="Login"
                        keyboardType='email-address'
                        onChangeText={(text) => setLogin(text)}
                        value={login}
                    />


                    <TextInput
                        style={styles.input}
                        variant="standard"
                        label="Senha"
                        secureTextEntry
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => loginFirebase()}
                    >
                        <Text>Entrar</Text>
                    </TouchableOpacity>

                </ImageBackground>

                <MaterialIcons
                    style={styles.configuracoes}
                    name="settings"
                    size={36}
                    color="white"
                />

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 40
    },
    losango: {
        width: 400,
        height: 600,
        display: 'flex',
        justifyContent: 'center',
    },
    logo: {
        width: 195,
        height: 170,
        position: 'absolute',
        right: 0,
        top: 0,
        marginRight: 30,
        marginTop: 30,
    },
    stocka: {
        width: 200,
        height: 50,
        marginStart: 30,
        marginTop: 10,
    },
    text: {
        marginStart: 30,
    },
    input: {
        width: 280,
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 30,
        marginStart: 30,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 50,
        backgroundColor: '#F2A716',
        color: '#FFFFFF',
        marginTop: 40,
        marginStart: 120,
        borderRadius: 20
    },
    configuracoes: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: 20,
        marginBottom: 20,
    }
});
