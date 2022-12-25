import { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default function AppPasswordInput({ ...props }){
    const [textHidden, setTextHidden] = useState(true)
    return(
        <View style={styles.container}>
            <TextInput {...props} style={styles.textInput} secureTextEntry={textHidden}/>
            <Text onPress={() => setTextHidden(!textHidden)}>{textHidden == true ? "Show" : "Hide"}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
       height: 58,
       backgroundColor: "cyan",
       borderRadius: 10,
       alignItems: "center",
       paddingLeft: 5,
       marginTop: 15,
       flexDirection: "row"
    },

    textInput: {
        fontSize: 16,
        fontWeight: "bold",
        flexGrow: 1,
        flexShrink: 1,
         
    }
})