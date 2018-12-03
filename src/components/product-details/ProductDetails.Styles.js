import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 75,
        backgroundColor: '#000000',
    },
    logo: {
        height: 32,
        width: 32,
    },
    title: {
        marginBottom: 50,
        fontSize: 40,
        fontFamily: 'vincHand',
        fontWeight: 'bold',
        color: Colors.Graphite,
    },
    input: {
        height: 40,
        width: 350,
        borderWidth: 1,
        borderColor: Colors.LightGray,
        fontFamily: 'vincHand',
        textAlign: 'center',
    },
});
