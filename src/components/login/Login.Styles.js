import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingTop: 110,
        paddingHorizontal: 50,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 40,
        fontFamily: 'bearerFond',
        color: Colors.Graphite,
        textAlign: 'center',
    },
    input: {
        height: 50,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: Colors.DarkGray,
        color: Colors.Graphite,
        fontFamily: 'bearerFond',
        fontSize: 20,
        textAlign: 'center',
    },
});
