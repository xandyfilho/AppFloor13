import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,

} from 'react-native';

export default function Sneakers(props) {
 return (
    <TouchableOpacity 
        style = {styles.container}
        onPress = {props.onClick}
     >

       <Image
        source = {props.img}
        style = {styles.sneakersImg}
        />

        <Text style = {styles.sneakersText}>
            {props.children}
        </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create ({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    sneakersImg: {
        resizeMode: 'contain',
        width: 160,
        height: 160

    },
    sneakersText: {
        fontSize: 16

    },

})