'use strict';
const React = require('react-native');
const { StyleSheet } = React;
const colors = require('./colors');
const {width} = React.Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSV: {
        flex: 1,
        backgroundColor: colors.background
    },
    row: {
        flexDirection: 'row'
    },
    col_2: {
        width: '50%'
    },
    col_3: {
        width: '33%'
    },
    col_4: {
        width: '25%'
    },
    containerSearch: {
        flexDirection: 'column',
        backgroundColor: colors.white,
        flex: 1,
        width: width
    },
    listSearch: {
        justifyContent: 'space-around'
    },
    columnSearch: {
        flexShrink: 1,
        justifyContent: 'center'
    },
    list: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        padding: 20,
        marginTop: -20
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        color: colors.darkGray,
        marginTop: 30,
        marginBottom: -30
    },
    horizontalLine: {
        backgroundColor: colors.gray,
        height: 1,
        width: '100%',
        marginTop: 20
    }
});