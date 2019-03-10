'use strict';

import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    descriptionContainer: {
        flexDirection: 'column',
        alignItems: 'stretch',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        paddingTop: 15,
        paddingBottom: 25,
        paddingLeft: 40,
        paddingRight: 60,
        borderColor: Colors.DarkGray,
    },
    icon: {
        width: 40,
        height: 40,
    },
    title: {
        marginLeft: 20,
        color: Colors.Graphite,
        fontSize: 35,
        fontFamily: 'bearerFond',
    },
    description: {
        marginBottom: 20,
        color: Colors.Graphite,
        fontSize: 12,
        fontFamily: 'bearerFond',
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});
