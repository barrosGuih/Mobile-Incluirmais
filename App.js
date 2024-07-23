import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import React from 'react';
import Logo from './assets/Pages/vascu.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styless.cont}>quem ta lendo eh </Text>
      <Image style={styless.img} source={Logo}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'linear-gradient(45deg, rgba(19,170,255,1) 0%, rgba(63,0,198,1) 3F00C6%)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444',
    color: '#fffff',
  },

  }
);

const styless = StyleSheet.create({
  cont: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'white',
  },
  img: {
    width: 400,
    height: 400,
  }
});
