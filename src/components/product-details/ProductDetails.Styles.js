import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        marginTop: 120,
        marginBottom: 200,
        borderWidth: 2,
        borderColor: Colors.DarkGray,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    descriptionContainer: {
        alignItems: 'flex-start',
        paddingLeft: 40,
        paddingRight: 60,
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
});
