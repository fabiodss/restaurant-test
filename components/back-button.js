import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const BackButton = ({color='black', onPress=()=>{}}) => {
    let img = undefined
    color == 'black' ? img = require('../assets/img/icons/chevron_left_black.png') : img = require('../assets/img/icons/chevron_left_white.png')
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={img} style={styles.icon} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 50,
        left: 20
    },
    icon: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    }
});

export default BackButton;