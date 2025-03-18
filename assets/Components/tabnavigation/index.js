
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
import { Agenda } from 'react-native-calendars';

function HomeScreen(){

const [aluno, setAluno] = useState({});
const id = 55;

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
                    <Image source={{uri: aluno.foto}} style={{width:'40%', height: '55%', borderRadius: 200}} resizeMode= 'contain'></Image>
                     <Text style={{color:'white', width:'60%',fontSize: 22, fontWeight:'bold', textAlign:'center'}}>{`Bem vindo ${aluno.nome}`}</Text>
                </View>
            </ImageBackground>
          </View>
        </LinearGradient>
    )
}

function ProfileScreen({navigation}) {
  const [aluno, setAluno] = useState({});
const id = 55;

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
            <Image source={{uri: aluno.foto}} style={{width:'40%', height: '55%', marginTop:'4%', marginBottom: '3%', borderRadius: 200}} resizeMode= 'contain'></Image>
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

function AtividadeScreen({navigation}) {
  const [atividades, setAtividades] = useState([]);

  const fetchAtividades = async () => {
    const res = await fetch('/api/alunos');
    const data = await res.json();
    setAtividades(data);
}

useEffect(() => {
  fetchAtividades();
}, []);

  return (
    <LinearGradient colors={['#13AAFF', '#3F00C6']} style={{flex: 1, alignItems:'center'}}>
      <StatusBar barStyle="light-content" backgroundColor="#3F00C6" />
      <View style={{flex: 1, margin:10, width: '97%', height: '98%', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 25}}>
        <View style={{ width:'100%', height:'100%', overflow: 'hidden', borderRadius:32, borderWidth: 4, borderColor:'#BABCD2', backgroundColor:'white', alignItems:'center'}}>
            <Image source={Logo} style={{width:'40%', height:'7%', backgroundColor:'#118EF4', marginBottom:'6%', top:'2%', borderRadius:32}} resizeMode= 'contain'/>
              <View style={{flexDirection:'row', backgroundColor:'#CEDEE9', width:'55%', height:'6%', alignItems:'center', justifyContent:'center', borderRadius: 32}}>
              <Image source={iconCalendar} style={{width:'15%', backgroundColor:'#EBF7FF', height:'80%', borderWidth:4, borderColor:'#EBF7FF', marginRight:'6%', borderRadius:32}} resizeMode= 'contain'/>
              <Text style={{fontSize:15, fontWeight:'bold'}}>Lista de Atividades:</Text>
                </View>
                  <View style={{backgroundColor:'none', flex:1, width:'97%', borderRadius:32, marginBottom:'2%', marginTop:'2%', borderWidth: 7, borderColor:'#CCCDD1', alignItems:'center' }}>
                    <View style={{width:'100%', height:'15%', backgroundColor:'#ECEFF1', borderTopStartRadius:22, borderTopEndRadius:22,alignItems:'center', justifyContent:'center', marginBottom:'10%' }}>
                      <View style={{backgroundColor:'ECEFF1', width:'80%', height:'50%', borderRadius:32, borderWidth:6, borderColor:'#CAD4DB', alignItems:'center', justifyContent:'center' }}>
                <Text style={{fontSize:28, fontWeight:'bold'}}>Atividades</Text>
                      </View>              
                    </View>
                      <View style={{backgroundColor:'#E6EDF1', width:'95%', height:'80%', bottom:'3.5%', borderRadius:22, alignItems:'center'}}>
                        <View>{atividades.map(a => 
                          <TouchableOpacity
                        onPress={() => navigation.navigate('detailsAtividade')}
                        style={{width:'90%', height:'25%', backgroundColor:'#E2EAF0', marginTop:'3%', borderRadius:22, alignItems:'center', borderWidth:5, borderColor:'white'}}>
                          <View style={{backgroundColor:'#CAD3DB', width:'90%', height:'30%', top:'7%', marginBottom:'3%', borderRadius:32}}>
                              <Text style={{textAlign:'center', fontWeight:'bold'}}>Matematica</Text>
                          </View>
                            <View style={{backgroundColor:'#CAD3DB', width:'90%', height:'45%', top:'10%', borderRadius:22}}>
                              <Text style={{textAlign:'start', marginLeft:'10%', fontWeight:'bold'}}>Prazo</Text>
                              <Text style={{textAlign:'start', marginLeft:'10%', fontWeight:'bold'}}>Hora:</Text>
                            </View>
                        </TouchableOpacity>
                        )}</View>

                      </View>
                   </View>
            </View>
          </View>
    </LinearGradient>
  );
}

export function AtividadeDetailsScreen({navigation}) {
  return (
    <LinearGradient colors={['#13AAFF', '#3F00C6']} style={{flex: 1, alignItems:'center'}}>
      <StatusBar barStyle="light-content" backgroundColor="#3F00C6" />
      <View style={{flex: 1, margin:10, width: '97%', height: '98%', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 25}}>
        <View style={{ width:'100%', height:'100%', overflow: 'hidden', borderRadius:32, borderWidth: 4, borderColor:'#BABCD2', backgroundColor:'white', alignItems:'center'}}>
          <TouchableOpacity 
            onPress={()=> navigation.navigate('Home')}
            style={{marginRight:'80%', top:'2%'}}>
            <Text style={{fontSize:18, color:'purple'}}>Voltar</Text>
            </TouchableOpacity>
            <Image source={Logo} style={{width:'40%', height:'7%', backgroundColor:'#118EF4', marginBottom:'10%', marginBottom:'6%', top:'1%', borderRadius:32}} resizeMode= 'contain'/>
              <View style={{flexDirection:'row', backgroundColor:'#CEDEE9', width:'55%', height:'6%', alignItems:'center', justifyContent:'center', borderRadius: 32}}>
              <Image source={iconCalendar} style={{width:'15%', backgroundColor:'#EBF7FF', height:'80%', borderWidth:4, borderColor:'#EBF7FF', marginRight:'6%', borderRadius:32}} resizeMode= 'contain'/>
              <Text style={{fontSize:15, fontWeight:'bold'}}>Lista de Atividades:</Text>
                </View>
                  <View style={{backgroundColor:'none', flex:1, width:'97%', borderRadius:32, marginBottom:'2%', marginTop:'2%', borderWidth: 7, borderColor:'#CCCDD1', alignItems:'center' }}>
                    <View style={{width:'100%', height:'15%', backgroundColor:'#ECEFF1', borderTopStartRadius:22, borderTopEndRadius:22,alignItems:'center', justifyContent:'center', marginBottom:'10%' }}>
                      <View style={{backgroundColor:'ECEFF1', width:'80%', height:'50%', borderRadius:32, borderWidth:6, borderColor:'#CAD4DB', alignItems:'center', justifyContent:'center' }}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>Matematica</Text>
                      </View>              
                    </View>
                      <View style={{backgroundColor:'#E6EDF1', width:'95%', height:'30%', bottom:'3.5%', borderRadius:22}}>
                          <Text style={{ height:'100%', padding:12, fontSize:16}}></Text>
                      </View>
                      <Text style={{ fontSize:24, fontWeight:'bold'}}>Prazo</Text>
                      <View style={{flexDirection:'row', marginTop:'10%'}}>
                        <Text style={{ fontSize:18, right:'30%'}}>Data</Text>
                        <Text style={{ fontSize:18, left:'10%'}}>Hora</Text>
                      </View>
                      <TouchableOpacity style={{marginTop:'30%', width:'55%', height:'10%', backgroundColor:'#766BBB', borderRadius:32, justifyContent:'center', alignItems:'center'}}>
                          <Text style={{fontSize:22,  color:'white', fontWeight:'bold'}}>Concluida</Text>
                        </TouchableOpacity>
                   </View>
            </View>
          </View>
    </LinearGradient>
  );
}


function AgendaScreen() {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      const newItems = {};
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = new Date(time).toISOString().split('T')[0];
        if (!items[strTime]) {
          newItems[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            newItems[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      setItems({ ...items, ...newItems });
    }, 1000);
  };
    return (
      <LinearGradient colors={['#13AAFF', '#3F00C6']} style={{flex: 1, alignItems:'center'}}>
      <StatusBar barStyle="light-content" backgroundColor="#3F00C6" />
      <View style={{flex: 1, margin:10, width: '97%', height: '98%', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 25}}>
        <View style={{ width:'100%', height:'100%', overflow: 'hidden', borderRadius:32, borderWidth: 4, borderColor:'#BABCD2', backgroundColor:'white', alignItems:'center'}}>
            <Image source={Logo} style={{width:'40%', height:'7%', backgroundColor:'#118EF4', marginBottom:'6%', top:'2%', borderRadius:32}} resizeMode= 'contain'/>
              <View style={{flexDirection:'row', backgroundColor:'#CEDEE9', width:'55%', height:'6%', alignItems:'center', justifyContent:'center', borderRadius: 32}}>
              <Image source={iconCalendar} style={{width:'15%', backgroundColor:'#EBF7FF', height:'80%', borderWidth:4, borderColor:'#EBF7FF', marginRight:'6%', borderRadius:32}} resizeMode= 'contain'/>
              <Text style={{fontSize:15, fontWeight:'bold'}}>Lista de Atividades:</Text>
                </View>
                  <View style={{backgroundColor:'white', flex:1, width:'97%', borderRadius:32, marginBottom:'2%', marginTop:'2%', borderWidth: 7, borderColor:'#CCCDD1', alignItems:'center' }}>
                    <View style={{width:'100%', height:'15%', backgroundColor:'#ECEFF1', borderTopStartRadius:22, borderTopEndRadius:22,alignItems:'center', justifyContent:'center', marginBottom:'10%' }}>
                      <View style={{backgroundColor:'ECEFF1', width:'80%', height:'50%', borderRadius:32, borderWidth:6, borderColor:'#CAD4DB', alignItems:'center', justifyContent:'center' }}>
                        <Text style={{fontSize:28, fontWeight:'bold'}}>Agenda</Text>
                      </View>              
                    </View>
                    <Agenda style={{width:'100%', borderRadius:32}}
              items={items}
              loadItemsForMonth={loadItems}
              selected={new Date().toISOString().split('T')[0]}
              renderItem={(item) => {
                return (
                  <View style={{backgroundColor: 'white', width:'100%',borderRadius: 5,padding: 10,marginRight: 10, marginTop: 17}}>
                    <Text>{item.name}</Text>
                  </View>
                );
              }}
              renderEmptyDate={() => {
                return (
                  <View style={{height: 100, width:'100%', paddingTop: 30}}><Text>No activities on this date.</Text></View>
                );
              }}
              monthFormat={'MMMM yyyy'}
              rowHasChanged={(r1, r2) => { return r1.name !== r2.name; }}
              pastScrollRange={12}
              futureScrollRange={12}
              dayNames={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
              dayNamesShort={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
              todayButtonText={'Today'}
            />
                      

                   </View>
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

export function RootStack() {
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
