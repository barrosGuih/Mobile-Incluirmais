import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import {Login} from '../inicio/Inicio';
import Swiper from 'react-native-swiper';
import Image1 from './image1.png';
import Image2 from './Image2.png';
import Image3 from './Image3.png';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function NewUser({navigation}){
      return (
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Image source={Image1} style={styles.image} />
            <Text style={styles.titulo}>Você Não Está Sozinho</Text>
            <Text style={styles.subtitulo}>Aqui, você encontrará todo o suporte necessário para se integrar melhor na escola. Estamos ao seu lado em cada passo do caminho.</Text>
          </View>
          <View style={styles.slide2}>
            <Image source={Image2} style={styles.image} />
            <Text style={styles.titulo1}>Melhor Organização </Text>
            <Text style={styles.subtitulo1}>No nosso app, você pode criar e personalizar suas rotinas diárias. Isso ajuda a manter suas atividades organizadas e a garantir que você não perca nenhum compromisso importante.</Text>
          </View>
          <View style={styles.slide3}>
            <Image source={Image3} style={styles.image} />
            <Text style={styles.titulo2}>Estamos com você!</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.prosseguir}>
              <Text style={styles.textbotao}>Prosseguir</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
      );
    };

  
    export const styles = StyleSheet.create({
      wrapper: {
        backgroundColor: 'black'
      },
      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF6ED',
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9CA262',
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6D2E01',
      },
      image: {
        width: '98%',
        height: '50%',
        bottom: '4%'
      },
      titulo:{
        fontWeight: 'bold',
        fontSize: 25,
        bottom: '5%',
        marginBottom: '4%' 
      },
      subtitulo:{
        textAlign: 'center',
        fontSize: 24,
        bottom: '5%',
        width: '80%'
      },
      titulo1:{
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: '4%' 
      },
      subtitulo1:{
        textAlign: 'center',
        fontSize: 20,
        width: '80%'
      },
      titulo2:{
        fontWeight: 'bold',
        fontSize: 36,
        top: '0.4%',
        color: 'white'
      },
      textbotao:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: '3%',
        paddingLeft: '20%'
      },
      prosseguir:{
        backgroundColor: '#724B2F',
        width: '50%',
        height: '5%',
        top: '14%',
        left: '22%',
        borderRadius: 18
        

      }

    });
