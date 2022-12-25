import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import ImageProgress from "react-native-image-progress";

export default ImagePage=()=> {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            {/** */}
          <View style={styles.imageContainer}>
          <Image source={{uri: "https://images.pexels.com/photos/14071176/pexels-photo-14071176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}}
                resizeMode="cover"
                style={{height: "100%", width: "100%"}}/>
          </View>
            
          {/** */}
          <View style={styles.imageContainern}>
            <ImageProgress source={{uri: "https://images.pexels.com/photos/14271136/pexels-photo-14271136.jpeg"}}
                resizeMode="cover"
                style={{height: "100%", width: "100%"}}
                indicator={() => <ActivityIndicator size="large"/>}/>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center" ,
        paddingHorizontal: 30,   
    },

    imageContainer: {
        marginTop: 20,
        height: 250,
        width: "100%",
        borderRadius: 30,
        backgroundColor: "cyan",
        overflow: "hidden",
    },

    imageContainern: {
        marginTop: 20,
        height: 250,
        width: "100%",
        borderRadius: 30,
        //backgroundColor: "cyan",
        overflow: "hidden",
    },
})