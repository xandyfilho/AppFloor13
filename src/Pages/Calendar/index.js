import React from 'react';
import { 
  View, 
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Sneakers from '../../component/Sneakers';

export default function Calendar() {
  const navigation = useNavigation();

 return (
   <View style = {styles.container}>

    <View style = {styles.headerContainer}>
      <Text style = {styles.textHeader}>Calendário</Text>
    </View>


    <View style = {styles.sneakersContain}>
      <Image
        source = { require( '../../assets/1.png')}
        style = {styles.sneakersImg}        
      />

      <View style = {styles.line}/>

      <View style = {styles.containerText}></View>
            
      <Image
        source = { require( '../../assets/4.png')}
        style = {styles.sneakersImg}
      />
      
      <View style = {styles.line}/>

      <Image
        source = { require( '../../assets/2.png')}
        style = {styles.sneakersImg}
      />

      <View style = {styles.line}/>

      <Image
        source = { require( '../../assets/3.png')}
        style = {styles.sneakersImg}
      />

      <View style = {styles.line}/>
          
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2'

  },
  headerContainer: {  
    width: '100%',
    backgroundColor: '#f6f6f6',
    padding: 10,
    marginBottom: 30,
    elevation: 15
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#c2c2c2'
  },
  sneakersContain: {
    marginLeft: '5%',
    width: '90%',
    backgroundColor: '#f6f6f6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    elevation: 15
  },
  sneakersImg: {
    resizeMode: 'contain',
    width: 100,
    height: 100

  },
  sneakersText: {
    fontSize: 16

},
  text1: {

  },
  containerText: {

  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#c2c2c2',
    marginVertical: '2%'

  }
})