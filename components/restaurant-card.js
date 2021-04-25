import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const RestaurantCard = ({logo, name, onPress=()=>{}}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{uri: logo}} style={styles.logo} />
            <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
    );
}


const colors = require('../styles/colors');
const {width} = Dimensions.get('window')
const margin = width/2-40

const styles = StyleSheet.create({
    card: {
        width: margin,
        height: margin,
        backgroundColor: colors.blueBg,
        alignSelf: 'center',
        borderRadius: 8,
        margin: 10
    },
    logo: {
        width: margin,
        height: margin,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    title: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        fontFamily: 'Poppins-Bold',
        color: colors.white
    }
});

export default RestaurantCard;