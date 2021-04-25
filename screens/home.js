import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, ImageBackground, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import SearchInput from '../components/search-input';
import RestaurantCard from '../components/restaurant-card';
import Loading from '../components/loading';
import BottomLoading from '../components/bottom-loading';
import RequestApi from '../src/request';

export default function Home({ navigation }) {
    const [page, setPage] = useState(1)
    const [dataSource, setDataSource] = useState(undefined);
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false);

    async function getData() {
        try {
            await RequestApi('v1/restaurants?page=' + page + '&limit=20').then((result) => {
                if (page === 1) {
                    setDataSource(result.data)
                } else {
                    setDataSource([...dataSource, ...result.data])
                }
                console.log(result.data)
            })
            setPage(page + 1)
        } catch (e) {
            console.log(e)
        }
        setLoadingMore(false)
        setLoading(false)
    }

    const handleOnEndReached = async () => {
        setLoadingMore(true)
        getData()
    }

    function searchRestaurant(text) {
        navigation.navigate('Search', { search: text })
    }

    useEffect(() => {
        loading ? getData() : () => { }
    }, []);

    if (loading) {
        return <Loading />
    } else {
        return (
            <SafeAreaView style={global.containerSV}>
                <FlatList
                    ListHeaderComponent={() => {
                        return (
                            <>
                                <ImageBackground style={styles.headerImg} source={require('../assets/img/header.png')}>
                                    <Text style={styles.title}>Descubra novos sabores</Text>
                                    <Text style={styles.subTitle}>Aqui eu converso com você sobre nossa proposta</Text>
                                </ImageBackground>
                                <View style={styles.main}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                        <SearchInput placeholder="Encontre um restaurante" changedText={() => { }} searchSubmit={text => searchRestaurant(text)} />
                                    </TouchableOpacity>
                                    <Text style={global.sectionTitle}>Restaurantes</Text>
                                </View>
                            </>
                        )
                    }}
                    data={dataSource}
                    renderItem={(obj) => {
                        return (
                            <RestaurantCard
                                key={obj.index}
                                logo={obj.item.logo}
                                name={obj.item.name}
                                onPress={() => navigation.navigate('Info', { restaurant: obj.item })}
                            />
                        )
                    }}
                    style={global.containerSearch}
                    contentContainerStyle={global.listSearch}
                    numColumns={2}
                    columnWrapperStyle={global.columnSearch}
                    showsVerticalScrollIndicator={false}
                    onEndReached={handleOnEndReached}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={() => loadingMore && <BottomLoading />}
                />
            </SafeAreaView>
        )
    }

}

const global = require('../styles/global');
const colors = require('../styles/colors');
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    headerImg: {
        width: width,
        height: height / 3,
        resizeMode: 'cover',
        paddingHorizontal: 20
    },
    main: {
        width: width,
        marginTop: -27,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors.background,
        padding: 30,
    },
    title: {
        fontSize: 24,
        padding: 20,
        paddingBottom: 15,
        paddingRight: 100,
        marginTop: 10,
        color: colors.darkGray,
        fontFamily: 'Poppins-Bold'
    },
    subTitle: {
        fontSize: 18,
        paddingHorizontal: 20
    }
});