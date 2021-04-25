import React, {useState} from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';

const SearchInput = (props) => {

    const [search, setSearch] = useState('')

    function changeText (text) {
        setSearch(text)
        props.changedText(text)
    }

    return (
        <View>
            <Image source={require('../assets/img/icons/search_red.png')} style={styles.searchIcon} />
            <TextInput
                style={styles.searchInput}
                placeholder={props.placeholder}
                placeholderTextColor={colors.gray}
                onChangeText={text => changeText(text)}
                returnKeyType="search"
                onSubmitEditing={() => props.searchSubmit(search)}
            />
        </View>
    );
}


const colors = require('../styles/colors');

const styles = StyleSheet.create({
    searchInput: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        borderColor: colors.border,
        borderWidth: 1,
        paddingLeft: 50,
        justifyContent: 'center',
        color: colors.dark,
        fontSize: 14
    },
    searchIcon: {
        position: 'absolute',
        left: 13,
        top: 13,
        height: 25,
        width: 25,
        resizeMode: 'contain'
    }
});

export default SearchInput;