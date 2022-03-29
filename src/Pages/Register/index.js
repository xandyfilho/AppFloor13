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

export default function Register() {

    const navigation = useNavigation();

    return (
      <View style = {styles.container}>
          <Image
            source = { require ('../../assets/logo.png')}
            style = {styles.logo}
        />

        <Text style = { styles.registrarText}>Registrar-se</Text>

        <TextInput 
            placeholder = "Seu nome"
            style = { styles.input}
        />

        <TextInput 
            placeholder = "E-mail"
            style = { styles.input}
        />

        <TextInput 
            secureTextEntry = {true} 
            placeholder = "Senha"
            style = { styles.input}
        /> 

        <TouchableOpacity
            style = {styles.cadastrarButton}
            onPress = { () => alert('Usuário Cadastrado')}
        >
            <Text style = {styles.cadastrarText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress = { () => navigation.navigate('Login')}>
            <Text>Fazer Login</Text>
        </TouchableOpacity>


      </View>
  );
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#C2C2C2',
        alignItems: 'center',        
    },
    logo: {
        width: 300,
        height: 239,
        resizeMode: "contain",
        marginTop: 0,
        marginBottom: 0,
    },
    registrarText: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20
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
    cadastrarButton: {
        width: 310,
        marginTop: 0,
        backgroundColor: '#77796D',
        marginBottom: '2%',
        height: 57,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    cadastrarText: {
        fontSize: 16,
        fontWeight: 'bold',    
        color: '#FFF'
    },
})