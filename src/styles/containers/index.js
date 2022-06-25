import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.bgColor,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0006',
    },
    section: {
        padding: 10,
        marginBottom: 10,
    },
    viewSection: {
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 5,
        marginHorizontal: 10,
        marginBottom: 10,
    },
});