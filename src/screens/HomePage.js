import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import UniversitiesApi from "../connection/UniversitiesApi";
import CountryPicker from "react-native-country-picker-modal";

export default HomePage =()=> {
    const [searchValue, setSearchValue] = useState("");
    const [universitiesList, setUniversitiesList] = useState([]);
    const [completeUniversitiesList, setCompleteUniversitiesList] = useState([]);
    const [country, setCountry] = useState("");


    //function to call API
    const makeApiCall = async (value)=> {
        console.log(value);
        const {data} = await UniversitiesApi.searchByCountry(value);
        console.log(data);
        if (data != null && data !=[] ){
        console.log(data[0]);
        console.log(data[0]["name"]);
        setUniversitiesList(data);
        setCompleteUniversitiesList(data);
    }
    };

    //useEffect to call function when country is updated
    useEffect(()=>{
        console.log("yellow");
        makeApiCall(country);
    }, [country]);

    //render item
    const universityCardItem = ({item}) =>{

        
        return (
                <View style={styles.listRow}>
                    <View style={styles.listRowItemOne}></View>
                    <View style={styles.listRowItemTwo}>
                    <Text>{item.name}</Text>
                    <Text>{item.web_pages}</Text>
                    </View> 
                </View>     
        )
    }

    
    // function to filter list by university name
    const filterByUniversity = (search_value) => {
        if(search_value.length >= 1) {
        //filtering through the data in the universities list
        const filteredData = completeUniversitiesList.filter((item)=>{
            return item.name.toString().toLowerCase().includes(search_value.toLowerCase())
        });

        setUniversitiesList(filteredData);
    } else{
        setUniversitiesList(completeUniversitiesList);
    }
};

    return(
        <View style={styles.container}>

            <Text style={{color:"gold", alignSelf:"center", fontWeight:"bold", fontSize: 30 }}>University Directory</Text>

            {/** Country Picker */}

            <CountryPicker
            
            onSelect={(value)=> setCountry(value.name)}/>
            
            <Text style={{marginVertical: 10}}>-----{country}------</Text>

            {/** Search Bar */}
            <View style={styles.searchBar}>
                <TextInput style={styles.textInput} placeholder={"Search By University"} 
                onChangeText={(text)=> {
                    setSearchValue(text);
                    filterByUniversity(text);
                }}/>

            </View>
            {/* The List */}
       <View style={{ flexGrow: 1, flexShrink: 1, paddingBottom: 10 }}>
         {/* A Flat List */}
         <FlatList
           data={universitiesList}
           renderItem={universityCardItem}
           showsVerticalScrollIndicator={false}
         />
       </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        //alignItems: "center",
       // justifyContent: "center",
        paddingHorizontal:28,
        marginTop: 50
    },

    searchBar: {
        height: 50,
        width: "100%",
        backgroundColor: "grey",
        borderRadius: 20,
        justifyContent: "center"
    },

    textInput: {
        fontWeight: "bold",
        fontSize: 15,
        paddingHorizontal: 20
    },

    listRow:{
        height: 58,
        backgroundColor: "grey",
        flexDirection: "row",
        marginTop: 15,
        borderRadius:10
    },

    listRowItemOne:{
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: "orange",
        marginTop: 10,
        marginLeft: 5
    },

    listRowItemTwo:{
        height: 50,
        width: 50,
       // borderRadius: 50,
        //backgroundColor: "yellow",
        flexGrow: 1,
        flexShrink:1,
        justifyContent: "center",
        marginTop: 4,
        marginLeft: 10
    },
});