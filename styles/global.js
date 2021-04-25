'use strict';
const React = require('react-native');
const { StyleSheet } = React;
const colors = require('./colors');
const {width,height} = React.Dimensions.get('window');

module.exports = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontFamily: 'Poppins-Bold'
    },
    h2: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold'
    },
    h3: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold'
    },
    h4: {
        fontSize: 17,
        fontFamily: 'Poppins-Bold'
    },
    h5: {
        fontSize: 15,
        fontFamily: 'Poppins-Bold'
    },
    h6: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold'
    },
    lead: {
        fontSize: 17,
        fontFamily: 'Poppins-Regular'
    },
    paragraph: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    small: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular'
    },
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
        fontSize: 17,
        fontFamily: 'Poppins-Bold',
        color: colors.darkGray,
        marginTop: 30,
        marginBottom: -25
    },
    horizontalLine: {
        backgroundColor: colors.gray,
        height: 1,
        width: '100%',
        marginTop: 30
    },
    backdrop: {
        width: width,
        height: height / 4,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
});