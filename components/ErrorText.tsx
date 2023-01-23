import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

interface ErrorTextProps {
    children: React.ReactNode
}

const ErrorText: React.FC<ErrorTextProps> = ({children}) => {
    return (
        <Text style = {styles.text}>{children}</Text>
    );
}


const styles = StyleSheet.create({
    text : {
        color :  Colors.warning,
        fontFamily : 'space-light',
        fontSize : 12,
        marginTop : 5,
        paddingLeft : 0
    }
});

export default ErrorText;
