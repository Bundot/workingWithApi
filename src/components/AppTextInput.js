import { View, StyleSheet, Text, TextInput } from 'react-native';

export default function AppTextInput({ ...props }){
    return(
        <View style={styles.container}>
            <TextInput {...props} style={styles.textInput}/>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
       height: 58,
       backgroundColor: "cyan",
       borderRadius: 10,
       justifyContent: "center",
       paddingLeft: 5,
       marginTop: 15
    },

    textInput: {
        fontSize: 16,
        fontWeight: "bold"
    }
})