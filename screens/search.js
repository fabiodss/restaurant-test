import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import RestaurantCard from '../components/restaurant-card';
import SearchInput from '../components/search-input';
import BackButton from '../components/back-button';
import RequestApi from '../src/request';
import BottomLoading from '../components/bottom-loading';

export default function Search({ route, navigation }) {

    const [search, setSearch] = useState(route.params.search)
    const [dataSource, setDataSource] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData(route.params.search)
    }, []);

    async function getData(text) {
        try {
            let url = ''
            let list = undefined
            text ? url = 'v1/restaurants?search=' + text : url = 'v1/restaurants?search=' + search
            await RequestApi(url).then((result) => {
                if (result.data) {
                    list = result.data.map((result, index) => {
                        return <RestaurantCard key={index} logo={result.logo} name={result.name} onPress={() => navigation.navigate('Info', { restaurant: result })} />
                    })
                } else {
                    list = <Text>Não foram encontrados resultados</Text>
                }
                setDataSource(list)
                console.log(search)
            })
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    function searchRestaurant(text) {
        setSearch(text)
        getData(text)
    }

    return (
        <ScrollView style={global.containerSV}>
            <View style={global.container}>
                <View style={styles.main}>
                    <BackButton onPress={() => navigation.goBack()} />
                    <Text style={styles.smallTitle}>Resultados para</Text>
                    <Text style={styles.title}>Termo pesquisado: {search}</Text>
                    <SearchInput placeholder="Encontre um restaurante" changedText={text => searchRestaurant(text)} searchSubmit={()=>{}} />
                    <Text style={global.sectionTitle}>Restaurantes</Text>
                </View>
                <View style={global.list}>
                    {!loading ? dataSource : <BottomLoading />}
                </View>
            </View>
        </ScrollView>
    )

}

const global = require('../styles/global');
const colors = require('../styles/colors');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    main: {
        width: width,
        backgroundColor: colors.background,
        padding: 30,
    },
    smallTitle: {
        color: colors.lightDown,
        alignSelf: 'center',
        marginBottom: 5,
        marginTop: 10
    },
    title: {
        color: colors.darkDown,
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        marginBottom: 30,
        textAlign: 'center'
    }
});