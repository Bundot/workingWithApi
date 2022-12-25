import { useFonts } from "expo-font";
import { View, Text, StyleSheet } from "react-native";

export default AppText=({font, style, children, ...otherProps})=>{
    //calling the actual font
    let [fontLoaded] = useFonts({
        Lato: require("../../assets/fonts/Lato/Lato-Bold.ttf"),
        Simonetta: require("../../assets/fonts/Simonetta/Simonetta-Regular.ttf"),


    })
    return(
        <>
        
        {fontLoaded ? 
        (<Text style={[{fontFamily: font }, style]} {...otherProps}>{children}</Text>) :
        
        (<Text style={[style]} {...otherProps}>{children}</Text>)
        }
        </>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})