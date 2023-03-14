import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Avatar } from "@react-native-material/core";
import { getAuth, signOut } from "firebase/auth";

export default function Home({ navigation }) {
  const auth = getAuth();

  const logoutFirebase = () => {
    signOut(auth).then(() => {
      navigation.navigate("/Login")
    }).catch((error) => {
      alert("Erro ao sair da conta")
    });
  };

  return (
    <ImageBackground
      source={require('../../../assets/StockaBackground.png')}
      resizeMode="cover"
      style={styles.background}
    >

      <View
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >

        <View style={styles.viewSair}>
          <MaterialIcons
            style={styles.sair}
            name="exit-to-app"
            size={36}
            color="white"
            onPress={() => logoutFirebase()}
          />
        </View>

        <View style={styles.header}>

          <Avatar
            style={styles.avatar}
            size={100}
            image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
          />

          <View>

            <Text
              style={styles.text}
              variant="h4"
            >Olá, Amora!</Text>

            <Text
              style={styles.text}
              variant="h6"
            >O que faremos hoje?</Text>

          </View>

        </View>

        <View style={styles.menu}>

          <TouchableOpacity
            style={styles.itensMenu}
            onPress={() => navigation.navigate("/Inventario")}
          >
            <Image
              style={styles.icone}
              source={require('../../../assets/Inventario.png')}
            />
            <Text
              variant="subtitle1"
            >Inventário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.itensMenu}
            onPress={() => navigation.navigate("/Inventario")}
          >
            <Image
              style={styles.icone}
              source={require('../../../assets/ColetaPrecos.png')}
            />
            <Text variant="subtitle1">Coleta</Text>
            <Text variant="subtitle1">de Preços</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.itensMenu}
            onPress={() => navigation.navigate("/Inventario")}
          >
            <Image
              style={styles.icone}
              source={require('../../../assets/BuscaPreco.png')}
            />
            <Text
              variant="subtitle1"
            >Busca Preço</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.itensMenu}
            onPress={() => navigation.navigate("/Inventario")}
          >
            <Image
              style={styles.icone}
              source={require('../../../assets/ListaPresentes.png')}
            />
            <Text variant="subtitle1">Lista</Text>
            <Text variant="subtitle1">de Presentes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.itensMenu}
            onPress={() => navigation.navigate("/Inventario")}
          >
            <Image
              style={styles.icone}
              source={require('../../../assets/ListaProdutos.png')}
            />
            <Text variant="subtitle1">Lista</Text>
            <Text variant="subtitle1">de Produtos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.itensMenu}
            onPress={() => navigation.navigate("/Inventario")}
          >
            <Image
              style={styles.icone}
              source={require('../../../assets/ControleValidade.png')}
            />
            <Text variant="subtitle1">Controle</Text>
            <Text variant="subtitle1">de Validade</Text>
          </TouchableOpacity>

        </View>

      </View>

    </ImageBackground>
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
  viewSair: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 30,
  },
  avatar: {
    display: 'flex',
    marginRight: 15
  },
  text: {
    color: 'white',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 30,
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  itensMenu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
  },
  icone: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },

});
