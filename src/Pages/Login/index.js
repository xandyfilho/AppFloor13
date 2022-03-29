import React from 'react';
import { 
  View,
  Image,
  TextInput, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation();

  return (
  <View style={styles.container}>      
  <StatusBar style = "auto"/>  

  <Image
    source = { require( '../../assets/logo.png')}  
    style = {styles.logo}
  />

  <TextInput 
    placeholder = 'Email'
    style = {styles.input} 
  />

  <TextInput
    secureTextEntry = {true} 
    placeholder = 'Senha'
    style = {styles.input}
  />
    <TouchableOpacity 
    style = {styles.loginButton}
    onPress = { () => navigation.navigate('Home')}
    >
      <Text style = {styles.loginText}>Entrar</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress = { () => navigation.navigate('Register')}>
      <Text style = {styles.cadastroText}>Cadastre-se</Text>
    </TouchableOpacity>

</View>

   
);
}

const styles = StyleSheet.create ({
container: {
  flex: 1,
  backgroundColor: '#C2C2C2',
  alignItems: 'center',
  justifyContent: 'center'
},
statusBar: {
  backgroundColor: '#rgba'
},
logo: {
  width: 426,
  height: 239,
  resizeMode: "contain",
  marginTop: 0,
  marginBottom: 30,
},
input: {
  width: 310,
  height: 57,
  backgroundColor: '#fff',
  marginBottom: 20,
  padding: 20,
  borderRadius: 50,
  borderWidth: 1,
  borderColor: '#fff'
},
loginButton: {
  width: 310,
  marginTop: 0,
  backgroundColor: '#77796D',
  marginBottom: '2%',
  height: 57,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10,
},
loginText: {
  fontSize: 16,
  fontWeight: 'bold',    
  color: '#FFF'
},
cadastroText: {
  color: '#77796D',
  marginTop: 5,
  fontWeight: 'bold'

}

});
