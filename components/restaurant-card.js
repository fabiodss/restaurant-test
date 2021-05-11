import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const RestaurantCard = ({ logo, name, onPress = () => { } }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{ uri: logo+'?time='+Date.now() }} style={styles.logo} />
            <View style={styles.backdrop} />
            <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
    );
}


const colors = require('../styles/colors');
const { width } = Dimensions.get('window')
const margin = width / 2 - 40

const styles = StyleSheet.create({
    card: {
        width: margin,
        height: margin,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignSelf: 'center',
        borderRadius: 8,
        margin: 10,
    },
    logo: {
        width: margin,
        height: margin,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    title: {
        position: 'absolute',
        fontFamily: 'Poppins-Bold',
        color: colors.white,
        fontSize: 12,
        bottom: 10,
        left: 10
    },
    backdrop: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 8,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
});

export default RestaurantCard;