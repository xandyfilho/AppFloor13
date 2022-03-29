import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView 
} from 'react-native';

import Sneakers from '../Sneakers';

export default function Footer() {
 return (
    <View style = {styles.container}>

        <Text style = {styles.title}>Veja Também</Text>

        <View style = {{flexDirection: 'row'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false}>

                <View style = {{marginHorizontal: 10}}>
                    <Sneakers img = {require('../../assets/9.png')} onClick = {() => alert('Sem mais informações')}>
                        Nike x Sean Cliver
                    </Sneakers>
                </View>

                <View style = {{marginHorizontal: 10}}>  
                    <Sneakers img = {require('../../assets/8.png')} onClick = {() => alert('Sem mais informações')}>
                        Nike x Club 58
                    </Sneakers>
                </View>

                <View style = {{marginHorizontal: 10}}>
                    <Sneakers img = {require('../../assets/7.png')} onClick = {() => alert('Sem mais informações')}>
                        Nike x Dark Mocha
                    </Sneakers>
                </View>

                <View style = {{marginHorizontal: 10}}>
                    <Sneakers img = {require('../../assets/12.png')} onClick = {() => alert('Sem mais informações')}>
                    Nike x Stingwater
                    </Sneakers>  
                </View>

            </ScrollView>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: '5%',
        width: '90%',
        backgroundColor: '#f6f6f6',
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30,
        elevation: 15
    },
    title: {
        fontSize: 15,
        paddingHorizontal: '2%',
        fontWeight: 'bold'
    }


})