import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const loadingScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/splash.png')} style={styles.backgroundImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: width,
        height: height,
    },
    backgroundImage: {
        alignSelf: 'center',
        width: width,
        height: height,
        resizeMode: 'cover'
    }
});

export default loadingScreen;