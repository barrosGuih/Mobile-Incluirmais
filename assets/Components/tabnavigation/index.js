import { Image, Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements';
import perfil from '../tabnavigation/userperfil.png';
import Fundo from '../tabnavigation/kid.png';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen(){

const background = require('../tabnavigation/kid.png');
    return(
        <View style={{flex:1}}>
            <ImageBackground style={{width:'100%', height:'110%'}}source={background} resizeMode='cover'>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Image source={perfil} style={{width:'40%', height: '55%',}} resizeMode= 'contain'></Image>
                    <Text style={{color:'white', fontSize: 24, fontWeight:'bold'}}>Bem vindo, Usuario Anonimo!</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

function ProfileScreen({navigation}) {

  return (
    <View style={{ flex:1, backgroundColor:'#F6F8FA', alignItems: 'center',  }}>
        <View style={{ backgroundColor:'#E7EBEF', width: '97%', height:'25%',marginTop:'3%', alignItems: 'center', borderRadius: 22  }}>
            <Image source={perfil} style={{width:'40%', height: '55%', marginTop:'4%', marginBottom: '3%'}} resizeMode= 'contain'></Image>
            <Text style={{fontSize: 18, fontWeight: 'bold', backgroundColor:'#D1D1D1', width:'70%', height:'20%', paddingTop: 5, borderRadius:22, textAlign: 'center'}}>Bem vindo! Usuario anonimo</Text>
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
  );
}

function AtividadeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages Screen</Text>
    </View>
  );
}

function AgendaScreen() {
    return (
      <View style={{backgroundColor: 'red', flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Messages Screen</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator style={{height:'1000%'}}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{ tabBarIcon: ({ color, size }) => ( <Icon name="home-sharp" color={color} size={size} /> ), }} />
      <Tab.Screen name="Atividades" component={AtividadeScreen}
      options={{ tabBarIcon: ({ color, size }) => ( <Icon name="create-sharp" color={color} size={size} /> ), }} /> 
      <Tab.Screen name="Agenda" component={AgendaScreen}
      options={{ tabBarIcon: ({ color, size }) => ( <Icon name="calendar-sharp" color={color} size={size} /> ), }} />  
      <Tab.Screen name="Perfil" component={ProfileScreen}
      options={{ tabBarIcon: ({ color, size }) => ( <Icon name="person-sharp" color={color} size={size} /> ), }} /> 
    </Tab.Navigator>
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
