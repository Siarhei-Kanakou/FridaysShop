import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    animated: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'indigo',
    },
    text: {
        color: 'ivory',
        fontSize: 16,
    },
    draggingArea: {
        flexGrow: 1,
        borderWidth: 1,
        borderColor: 'red',
    },
    draggable: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: 'red',
    }
});
