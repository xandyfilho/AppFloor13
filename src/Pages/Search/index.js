import React from 'react';
import { 
    View, 
    Text, 
    TextInput,  
    TouchableOpacity, 
    StyleSheet, 
} from 'react-native';


import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Search() {
    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
            <View style = {styles.containerHeader}>
                <View style={styles.header}>

                    <TouchableOpacity 
                        style={styles.iconArrow}
                        onPress = { () => navigation.navigate('Home')}
                    >
                    <Icon
                        name = "arrowleft"
                        size={20} 
                        color='#77796D'
                    />
                    </TouchableOpacity>

                    <Icon
                        style={styles.iconSearch}
                        name = "search1"
                        size={15} 
                        color='#77796D'
                    />     

                    <TextInput 
                        placeholder = 'Sneakers ou marcas '
                        placeholderTextColor = '#888'
                        style = {styles.input}
                    />

                </View>

            
                <TouchableOpacity
                    style={styles.iconFilter}
                    onPress = { () => alert('SEM FILTROS NO MOMENTO')}
                >
                    <Icon
                        name = "filter"
                        size={22} 
                        color='#FFF'
                    /> 
                </TouchableOpacity> 

            </View>

            <View style = {styles.containerEx}>

                <Text>Ex. Jordan 1</Text>

            </View>
            
        </View>



    );
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#c2C2C2',
        alignItems: 'center'
    },
    containerHeader: {
        flexDirection: 'row'
    },
    header: {
        width: '85%',
        height: 40,
        marginTop: '5%',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        elevation: 20

    },
    iconArrow: {
        marginLeft: 20,
        marginRight: 15
    },
    iconSearch: {
        marginRight: 5

    },
    iconFilter: {
        marginTop: '6%',
        marginLeft: '2%',
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    input: { 
        
    },
    containerEx: {
        marginTop: '5%'
    }



});