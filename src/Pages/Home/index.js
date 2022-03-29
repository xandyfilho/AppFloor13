import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  ScrollView
  } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import Sneakers from '../../component/Sneakers';
 
export default function Home() {
  const navigation = useNavigation();

  return (
    <View style = {styles.container}>

      <View style = { styles.headerContainer}>

        <View style={styles.header}>
          <TouchableOpacity 
            style = {styles.searchButton}
            onPress = { () => navigation.navigate('Search')}
          >
          <Icon
            style={styles.iconSearch}
            name = "search1"
            size={15} 
            color='#77796D'
          />
          <Text>Sneakers ou marcas</Text>     
          </TouchableOpacity>
        </View>

        <View style = {styles.tabContainer}>
          <TouchableOpacity
              onPress = { () => navigation.navigate('Home')}>
              <Text style = {styles.homeText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress = { () => navigation.navigate('Calendar')}>
            <Text style = {styles.calendarioText}>Calendário</Text>
          </TouchableOpacity>

        </View>

      </View>

      <ScrollView style = {styles.containerPrin}>

        <Text style = {styles.textPrin}>Sneakers lançamento</Text>

        <View style = {{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>

          <Sneakers img = {require('../../assets/10.png')} onClick = {() => navigation.navigate('Details')}>
          Nike x StrangeLove
          </Sneakers>       
          <Sneakers img = {require('../../assets/9.png')} onClick = {() => alert('Sem mais informações')}>
          Nike x Sean Cliver
          </Sneakers>       
          <Sneakers img = {require('../../assets/8.png')} onClick = {() => alert('Sem mais informações')}>
          Nike x Club 58
          </Sneakers>       
          <Sneakers img = {require('../../assets/7.png')} onClick = {() => alert('Sem mais informações')}>
          Nike x Dark Mocha
          </Sneakers>       
          <Sneakers img = {require('../../assets/6.png')} onClick = {() => alert('Sem mais informações')}>
          Nike x Habibi
          </Sneakers>       
          <Sneakers img = {require('../../assets/12.png')} onClick = {() => alert('Sem mais informações')}>
          Nike x Stingwater
          </Sneakers>       
          <Sneakers img = {require('../../assets/11.png')} onClick = {() => alert('Sem mais informações')}>
          Nike x Black and White
          </Sneakers>       
          <Sneakers img = {require('../../assets/4.png')} onClick = {() => alert('Sem mais informações')}>
          Nike x Dia de Los Muertos
          </Sneakers>       
          <Sneakers img = {require('../../assets/3.png')} onClick = {() => alert('Sem mais informações')}>
          Nike x Black and Gun
          </Sneakers>       
          <Sneakers img = {require('../../assets/2.png')} onClick = {() => alert('Sem mais informações')}>
          Nike x Court Purple
          </Sneakers>       
          <Sneakers img = {require('../../assets/1.png')} onClick = {() => alert('Sem mais informações')}>
          Nike x Patent Bred
          </Sneakers>       
          <Sneakers img = {require('../../assets/5.png')} onClick = {() => alert('Sem mais informações')}>
          Nike x Barber Shop
          </Sneakers>       

        </View>

      </ScrollView>

    </View>
    

  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#585858',
    alignItems: 'center',
    justifyContent: 'center'
},
  headerContainer: {
    width: '100%',
    height: 110,
    backgroundColor: '#c2c2c2',
    alignItems: 'center'
  },
  header: {
    width: '90%',
    height: 40,
    marginTop: '5%',
    padding: 2,
    borderRadius: 50,
    backgroundColor: '#ffff',
  },
  searchButton: {
    marginLeft: '1%',
    marginTop: '1%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSearch: {
    margin: 5
  },
  tabContainer:{
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  homeText: {
    marginRight: 50,
    color: 'white',
    fontWeight: 'bold'
  },
  calendarioText: {
    color: 'white',
    fontWeight: 'bold'
  },
  containerPrin: {
    width: '100%',
    backgroundColor: '#f6f6f6'
  },
  textPrin: {
    fontSize: 30,
    marginLeft: '5%',
    fontWeight: 'bold',
    color: '#000',
    
  
  }


});