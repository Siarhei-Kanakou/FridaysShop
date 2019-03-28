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
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
    },
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 50,
        paddingVertical: 250,
        backgroundColor: Colors.DarkGrayOpaque,
    },
    modalInnerContainer: {
        borderRadius: 5,
        borderWidth: 3,
        padding: 20,

        borderColor: Colors.DarkGray,
        backgroundColor: Colors.LightGray,
    },
    modalMessage: {
        paddingBottom: 20,
        color: Colors.Graphite,
        fontFamily: 'bearerFond',
        fontSize: 20,
        textAlign: 'center',
    },
    modalButtonContainer: {
        justifyContent: 'center',
        paddingHorizontal: 75,
    },
    modalButton: {
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: Colors.DarkGray,
    },
    modalButtonText: {
        color: Colors.Graphite,
        fontFamily: 'bearerFond',
        fontSize: 20,
        textAlign: 'center'
    },
});
