import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView, ImageBackground, Image } from 'react-native';
import { mTel } from '../src/helper';
import BackButton from '../components/back-button';
import RequestApi from '../src/request';
import Loading from '../components/loading';

// O objeto é passado da tela anterior para evitar tempo de carregamento
// A consulta é feita logo após o carregamento e os dados são atualizados

export default function Info({ route, navigation }) {

    const [loading, setLoading] = useState(true)
    const [restaurant, setRestaurant] = useState(route.params.restaurant)

    useEffect(() => {
        getData()
        setLoading(false)
    }, []);

    async function getData() {
        try {
            await RequestApi('v1/restaurants/' + restaurant.id).then((result) => {
                setRestaurant(result.data)
                console.log(result.data)
            })
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    if (loading) {
        return <Loading />
    }
    return (
        <ScrollView style={global.containerSV}>
            <ImageBackground style={styles.cover} source={{ uri: restaurant.image }}>
                <View style={styles.backdrop} />
                <BackButton onPress={() => navigation.goBack()} color="white" />
            </ImageBackground>
            <View style={global.container}>
                <View style={styles.main}>
                    <View style={styles.logoFrame}>
                        <Image source={{ uri: restaurant.logo }} style={styles.logo} />
                    </View>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.sectionTitle}>Descrição</Text>
                    <Text style={styles.text}>{restaurant.description}</Text>
                    <Text style={styles.sectionTitle}>Contato</Text>
                    <Text style={styles.text}>{mTel(restaurant.telephone)}</Text>
                    <Text style={styles.text}>{restaurant.website}</Text>
                    <Text style={styles.sectionTitle}>Faixa de preço</Text>
                    <Text style={styles.text}>{restaurant.price_range}</Text>
                    <View style={global.horizontalLine} />
                    <Text style={styles.sectionTitle}>Horários de funcionamento</Text>
                    <Text style={styles.text}>{restaurant.opening_hours}</Text>
                    <Text style={styles.sectionTitle}>Formas de pagamento</Text>
                    <Text style={styles.text}>{restaurant.payment_methods}</Text>
                </View>
            </View>
        </ScrollView>
    )

}

const global = require('../styles/global');
const colors = require('../styles/colors');
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    cover: {
        width: width,
        height: height / 4,
        resizeMode: 'cover'
    },
    backdrop: {
        width: width,
        height: height / 4,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    main: {
        width: width,
        marginTop: -50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors.background,
        padding: 30,
    },
    title: {
        color: colors.darkGray,
        alignSelf: 'center',
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        marginTop: 20
    },
    sectionTitle: {
        alignSelf: 'flex-start',
        fontFamily: 'Poppins-Bold',
        marginTop: 20,
        fontSize: 16,
        color: colors.darkGray
    },
    text: {
        color: colors.gray,
        fontSize: 13
    },
    logoFrame: {
        width: 128,
        height: 128,
        borderRadius: 64,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: -86,
        position: 'absolute',
        borderWidth: 5,
        borderColor: colors.brown
    },
    logo: {
        width: 114,
        height: 114,
        borderRadius: 57
    }
});