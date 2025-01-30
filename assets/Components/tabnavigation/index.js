
import { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements';
import perfil from '../tabnavigation/userperfil.png';
import Logo from './logo.png'
import iconCalendar from './usercalendar.png';
import Icon from 'react-native-vector-icons/Ionicons';
import background from './kid.png';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, insets } from 'react-native';


function HomeScreen(){

const [aluno, setAluno] = useState({});
const id = 36;

  useEffect(()=> {
    const fetchAlunos = async () => {
      try {
      const response = await fetch(`https://incluirmais.vercel.app/api/alunos/${id}`)
      const data = await response.json();
      setAluno(data);
      } catch (erro) {
        console.log(erro);
      }
    };

    fetchAlunos();
  }, []);
    return(
        <LinearGradient colors={['#13AAFF', '#3F00C6']} style={{flex:1, alignItems:'center'}}>
          <StatusBar barStyle="light-content" backgroundColor="#3F00C6" />
          <View style={{flex: 1, margin:10, width: '96%', height: '98%',  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : '25'}}>
            <ImageBackground style={{ flex: 1, width:'100%', height:'100%', overflow: 'hidden', borderRadius:32, borderWidth: 4, borderColor:'#BABCD2'}}imageStyle={{borderRadius:32}} source={background} resizeMode='cover'>
                <View style={{alignItems:'center',}}>
                    <Image source={perfil} style={{width:'40%', height: '55%',}} resizeMode= 'contain'></Image>
                     <Text style={{color:'white', width:'60%',fontSize: 22, fontWeight:'bold'}}>{`meu nome é: ${aluno.nome}testando`}</Text>
                </View>
            </ImageBackground>
          </View>
        </LinearGradient>
    )
}

function ProfileScreen({navigation}) {
  const [aluno, setAluno] = useState({});
const id = 36;

  useEffect(()=> {
    const fetchAlunos = async () => {
      try {
      const response = await fetch(`https://incluirmais.vercel.app/api/alunos/${id}`)
      const data = await response.json();
      setAluno(data);
      } catch (erro) {
        console.log(erro);
      }
    };

    fetchAlunos();
  }, []);

  return (
    <LinearGradient colors={['#13AAFF', '#3F00C6']} style={{flex: 1, alignItems:'center'}}>
      <StatusBar barStyle="light-content" backgroundColor="#3F00C6" />
      <View style={{flex: 1, margin:10, width: '97%', height: '98%', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 25}}>
        <View style={{ flex: 1, width:'100%', height:'100%', overflow: 'hidden', borderRadius:32, borderWidth: 4, borderColor:'#BABCD2', backgroundColor:'white', alignItems:'center'}}>
          <View style={{ backgroundColor:'#E7EBEF', width: '97%', height:'25%',marginTop:'3%', alignItems: 'center', borderRadius: 22  }}>
            <Image source={perfil} style={{width:'40%', height: '55%', marginTop:'4%', marginBottom: '3%'}} resizeMode= 'contain'></Image>
            <Text style={{fontSize: 18, fontWeight: 'bold', backgroundColor:'#D1D1D1', width:'70%', height:'20%', paddingTop: 5, borderRadius:22, textAlign: 'center'}}>{`Bem vindo ${aluno.nome}`}</Text>
          </View>

            <Text style={{marginTop: '8%', fontSize: 22, fontWeight: 'bold', marginBottom: '8%'}}>Configurações da conta:</Text>
            <TouchableOpacity style={{backgroundColor:'#E6E6E6', width:'80%', height:'10%', justifyContent:'center', alignItems:'center', marginBottom: '4%', borderRadius:20,}}>
                <Text style={{fontSize: 17, fontWeight:'bold'}}>Editar nome de usuário</Text>
            </TouchableOpacity >
            <TouchableOpacity style={{backgroundColor:'#E6E6E6', width:'80%', height:'10%', justifyContent:'center', alignItems:'center', marginBottom: '4%', borderRadius:20,}}>
                <Text style={{fontSize: 17, fontWeight:'bold'}}>Configurações de privacidade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#CF0000', width:'80%', height:'10%', justifyContent:'center', alignItems:'center', borderRadius:20, }} 
            onPress={()=> navigation.navigate('Login')}>
                <Text style={{fontSize: 17, fontWeight:'bold', color:'white'}}>Sair da conta</Text>
            </TouchableOpacity>
            </View>
            </View>
    </LinearGradient>
  );
}

function AtividadeScreen() {
  return (
    <LinearGradient colors={['#13AAFF', '#3F00C6']} style={{flex: 1, alignItems:'center'}}>
      <StatusBar barStyle="light-content" backgroundColor="#3F00C6" />
      <View style={{flex: 1, margin:10, width: '97%', height: '98%', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 25}}>
        <View style={{ width:'100%', height:'100%', overflow: 'hidden', borderRadius:32, borderWidth: 4, borderColor:'#BABCD2', backgroundColor:'white', alignItems:'center'}}>
            <Image source={Logo} style={{width:'40%', height:'7%', backgroundColor:'#2C4FE4', marginBottom:'6%', top:'2%', borderRadius:32}} resizeMode= 'contain'/>
            <View style={{flexDirection:'row', backgroundColor:'#CEDEE9', width:'55%', height:'6%', alignItems:'center', justifyContent:'center', borderRadius: 32}}>
              <Image source={iconCalendar} style={{width:'15%', backgroundColor:'#EBF7FF', height:'80%', borderWidth:4, borderColor:'#EBF7FF', marginRight:'6%', borderRadius:32}} resizeMode= 'contain'/>
              <Text style={{fontSize:15, fontWeight:'bold'}}>Lista de Atividades:</Text>
            </View>
            <View style={{backgroundColor:'red', flex:1, width:'100%', height:'100vh'}}>
              <View>
                <Text>Atividades</Text>
              </View>
            </View>
            </View>
            </View>
    </LinearGradient>
  );
}

function AgendaScreen() {
    return (
      <LinearGradient colors={['#13AAFF', '#3F00C6']} style={{flex: 1, alignItems:'center'}}>
        <StatusBar barStyle="light-content" backgroundColor="#3F00C6" />
      <View style={{flex: 1, margin:10, width: '97%', height: '98%', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 25}}>
        <View style={{ flex: 1, width:'100%', height:'100%', overflow: 'hidden', borderRadius:32, borderWidth: 4, borderColor:'#BABCD2', backgroundColor:'white', alignItems:'center'}}>
      
            </View>
            </View>
    </LinearGradient>
    );
  }

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <View style={{ flex: 1, backgroundColor: '#3F00C6' }}>
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'black',
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        elevation: 0,
        paddingBottom: 5,
        paddingTop: 5,
        height: 80,
        borderStartEndRadius:32,
        borderStartStartRadius:32,
      },
      tabBarLabelStyle: {
        fontSize: 12,
      },
    }}
  >
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{ headerShown: false, tabBarIcon: ({ color, size }) => ( <Icon name="home-sharp" color={color} size={size} /> ), }} />
      <Tab.Screen name="Atividades" component={AtividadeScreen}
      options={{ headerShown: false, tabBarIcon: ({ color, size }) => ( <Icon name="create-sharp" color={color} size={size} /> ), }} /> 
      <Tab.Screen name="Agenda" component={AgendaScreen}
      options={{ headerShown: false, tabBarIcon: ({ color, size }) => ( <Icon name="calendar-sharp" color={color} size={size} /> ), }} />  
      <Tab.Screen name="Perfil" component={ProfileScreen}
      options={{ headerShown: false, tabBarIcon: ({ color, size }) => ( <Icon name="person-sharp" color={color} size={size} /> ), }} /> 
    </Tab.Navigator>
    </View>
  );
}

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
