import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

// 412x660
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingBottom: 200,
    },
    title: {
        height: 120,
        borderBottomWidth: 2,
        borderColor: Colors.Graphite,

        color: Colors.Graphite,
        fontFamily: 'vincHand',
        fontSize: 40,
        lineHeight: 120,
        textAlign: 'center',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderBottomWidth: 2,
        borderColor: Colors.Graphite,
    },

    itemIcon: {
        marginHorizontal: 10,
    },
    itemNameContainer: {
        flex: 1,
        backgroundColor: 'blue',
    },
    itemName: {
        fontSize: 20,
        fontFamily: 'vincHand',
        color: Colors.Graphite,
    },
    itemButton: {
        marginHorizontal: 10,
    }
});
