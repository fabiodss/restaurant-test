import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

const BottomLoading = () => (
    <View style={styles.loading}>
        <Text style={styles.text}>Carregando</Text>
    <ActivityIndicator size="large" color={colors.danger}/>
    </View>
);

const colors = require('../styles/colors');

const styles = StyleSheet.create({
    loading: {
        alignSelf: 'center',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        color: colors.dark,
        marginRight: 15,
        fontSize: 14
    }
});

export default BottomLoading;