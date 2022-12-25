import { View, Text, StyleSheet } from "react-native";

//importing the font helper
import { useFonts } from "expo-font";
import AppText from "../components/AppText";

export default  TestingFoints =()=> {

    //actually importing the font
    useFonts({
        BlaBlaBla: require("../../assets/fonts/Lato/Lato-Bold.ttf")
    })
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Good Morning</Text>
        <Text style={styles.textWithFont}  >Good Morning</Text>
        <AppText font={"Lato"}>Good Morning</AppText>
        
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"  

    },

    text: {
        fontSize: 30
    },

    textWithFont:{
        fontSize: 30,
        fontFamily: "BlaBlaBla",        
    }
})