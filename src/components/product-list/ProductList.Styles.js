'use strict';

import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        borderBottomWidth: 2,
        paddingHorizontal: 10,
        borderColor: Colors.DarkGray,
    },
    itemName: {
        paddingHorizontal: 15,
    },
    itemText: {
        color: Colors.Graphite,
        fontSize: 25,
        fontFamily: 'bearerFond',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',

        padding: 20,

        borderBottomWidth: 2,
        borderColor: Colors.DarkGray,
    },
    headerText: {
        flex: 1,
        borderColor: Colors.DarkGray,
        color: Colors.Graphite,
        fontFamily: 'bearerFond',
        fontSize: 40,
        lineHeight: 60,
        textAlign: 'center',
    },
    cart: {
        borderColor: Colors.DarkGray,
        borderRadius: 6,
        borderWidth: 2,
        fontSize: 30,
        paddingHorizontal: 10,
    }
});
