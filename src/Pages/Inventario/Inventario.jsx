import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { MaterialIcons, Octicons, Ionicons } from '@expo/vector-icons';
import { Text, Avatar, Divider } from "@react-native-material/core";

export default function Inventario({ navigation }) {

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
        <View style={styles.menuSuperior}>
          <Octicons
            name="arrow-left"
            size={36}
            color="white"
            onPress={() => navigation.navigate("/")}
          />

          <MaterialIcons
            style={styles.configuracoes}
            name="settings"
            size={36}
            color="white"
          />
        </View>

        <View style={styles.titulo}>
          <Image
            style={styles.icone}
            source={require('../../../assets/Inventario.png')}
          />
        </View>
        <Text style={styles.text} variant="h3">Inventário</Text>

        <View style={styles.lista}>
          <View style={styles.listaCabecalho}>
            <Text variant="h6">Descrição</Text>
            <Text variant="h6">Data</Text>
          </View>

          <Divider />

          <View style={styles.listaCabecalho}>
            <Text variant="h5">Bebidas</Text>
            <Text variant="h5">05/01/22</Text>
          </View>
          <View style={styles.listaCabecalho}>
            <Text variant="h5">Bebidas</Text>
            <Text variant="h5">05/01/22</Text>
          </View>
          <View style={styles.listaCabecalho}>
            <Text variant="h5">Bebidas</Text>
            <Text variant="h5">05/01/22</Text>
          </View>

        </View>

        <View style={styles.viewFooter}>
          <Image
            source={require('../../../assets/StockaFooter.png')}
            resizeMode="cover"
            style={styles.footer}
          >
            {/* <View>
              <Ionicons
                // style={styles.configuracoes}
                name="add-circle-outline"
                size={36}
                color="white"
              />
              <Text variant="h6">Novo</Text>
            </View> */}
          </Image>
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
  menuSuperior: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10

  },
  titulo: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
  },
  icone: {
    width: 150,
    height: 150,
  },
  text: {
    marginLeft: 20,
    color: '#fff',
  },
  lista: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  listaCabecalho: {
    display: 'flex',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  viewFooter: {
    width: '100%',
    backgroundColor: 'white',
  },
  footer: {
    width: '100%',
    height: 90,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  }
});
