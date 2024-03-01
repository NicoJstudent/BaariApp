import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8e7cc3',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        width: '100%',
    },
    formRecipe: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        alignItems: 'center',
    },
    formText: {
        color: '#fff',
        width: '100%',
    },
    button: {
        margin: 10,
        paddingBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    navBar: {
        backgroundColor: '#3b3b3b',
    },
    h1: {
        color: '#fff',
        fontSize: 30,
        fontStyle: 'bold',
        paddingBottom: '10%',
    },
    textbox: {
        marginHorizontal: '5%', // Margin on the sides
        marginBottom: '5%', // Margin at the bottom
        height: 120, // Fixed height for better appearance on small screens
        paddingHorizontal: '2%', // Horizontal padding
        borderColor: '#222222',
        backgroundColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 5,
    },
    formName: {
        marginHorizontal: '5%', // Margin on the sides
        marginBottom: '5%', // Margin at the bottom
        height: 22, // Fixed height for better appearance on small screens
        paddingHorizontal: '2%', // Horizontal padding
        borderColor: '#222222',
        backgroundColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 5,
        maxHeight: 200,
    },
    formPreviewText: {
        color: 'lightgray',
        fontSize: 20,
    },
    inputHeader: {
        color: '#fff',
        fontSize: 20,
        fontStyle: 'bold',
        textAlign: 'center',
        paddingBottom: '5%',
    },
});

export default styles;