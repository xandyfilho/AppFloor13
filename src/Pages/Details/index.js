import React from 'react';
import { 
  View, 
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Footer from '../../component/Footer';

export default function Details({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Floor 13 Club',
    headerTintColor: '#ffff',
    headerStyle: { backgroundColor: '#c2c2c2'}
  })

 return (
    <ScrollView style = {styles.container}>

      <Image
      source = {require('../../assets/10.png')}
      style = {styles.image}
         
      />
         
      <View style = {styles.containerDetails}>

        <View>
          <Text style = {styles.title}>Nike SB Dunk Low</Text>
        </View>

        <View>
          <Text style = {styles.title1}>StrangeLove</Text>
        </View>

      </View>

      <View style = {styles.containerMid}>

        <View style = {styles.containerDes}>
          <Text style = {styles.textDes}>Lançamento</Text>
          <Text style = {styles.textDes}>Retail</Text>
        </View>

        <View style = {styles.containerPost}>
          <Text style = {styles.textLancamento}>01/02/2020</Text>
          <Text style = {styles.textValor}>R$ 499.99</Text>
        </View>

      </View>
      
      <View style = {styles.containerInfo}>

        <Text style = {styles.textContent}>Descrição</Text>
        <Text style = {styles.textDescricao}>A StrangeLove Skateboards criou a sua própria estética única ao combinar uma expressão criativa caótica com uma admiração profunda por aquilo que torna o skateboard divertido. Sediada na Califórnia, a peculiar marca associa-se agora à Nike SB para ceder a sua perspetiva pouco comum sobre um estilo apreciado: as Dunk Low. Esta edição apresenta um design revestido de veludo texturizado com sobreposições de camurça. Repleto de tons pastel, o esquema combina tonalidades sedutoras de rosa suave com apontamentos de Bright Melon e vermelho Gym. A StrangeLove deixa literalmente a sua marca com ilustrações de caveiras bordadas em cada calcanhar. Na sola, os grafismos de coração discretos demonstram afeto, mesmo a tempo do Dia dos Namorados.</Text>
         

      </View>

      <Footer/>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  image: {
    resizeMode: 'cover', 
    width: '100%',
    height: 350
  },
  containerDetails: {
    alignItems: 'center',
    marginBottom: 30  
  },
  title:  {
    fontSize: 30,
    fontWeight: 'bold',
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  containerMid: {
    marginLeft: '5%',
    width: '90%',
    backgroundColor: '#f6f6f6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    elevation: 15
  },
  containerDes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5
  },
  containerPost: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerInfo: {
    marginLeft: '5%',
    width: '90%',
    backgroundColor: '#f6f6f6',
    padding: 10,
    borderRadius: 10,
    elevation: 15
  },
  textDes: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 0
  },
  textContent: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10
  },
  textDescricao: {
    fontSize: 15,
    padding: 10
  },
  textLancamento: {
    fontSize: 15
  }
})