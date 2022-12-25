import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import AppPasswordInput from '../components/AppPasswordInput';
import AppTextInput from '../components/AppTextInput';

//using form
import { Form, Formik } from 'formik';
import * as Yup from "yup";

//creating our validation schema
const validationSchema= Yup.object().shape({
    email: Yup.string().required().email().label("Email Address"),
    password: Yup.string().required().max(10, "Password should be less than 11 characters").min(8, "Password Should be more than 4 characters").label("Password"),
})

export default function TestingForm(){
    //when form is submitted
    const onFormSubmit = ()=> {
        //call api here
        //navigate here
    };
    return(
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.loginContainer}>
            {/** The Form */}
            <Formik initialValues={{email:"", password: ""}} 
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}>

                {({handleChange, handleSubmit, errors, touched}) =>(
                    <>
                     <AppTextInput placeholder="Email" onChangeText={handleChange("email")}/>
                     <Text style={styles.error}>{touched.email && errors.email}</Text>
                     <AppPasswordInput placeholder="Password" onChangeText={handleChange("password")}/>
                     <Text style={styles.error}>{errors.password}</Text>
                     <TouchableOpacity style={styles.button} onPress={handleSubmit}><Text style={styles.bttnText} >Login</Text></TouchableOpacity>
                    </>
                )}
            </Formik>
            
            
        </View>
    </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
       alignItems: "center",
       paddingHorizontal: 20
    },

    title:{
        fontWeight: "bold",
        fontSize: 40

    },
    loginContainer:{
        height: 400,
        width:"100%",
        backgroundColor:"grey",
        borderRadius: 18,
        padding: 10
    },

    button:{
        height: 58, 
        backgroundColor:"orange", 
        justifyContent: "center", 
        alignItems:"center",
        borderRadius: 10
    },

    bttnText:{
        fontSize: 22, 
        fontWeight:"bold", 
        color:"White" 
    },

    error:{
        color: "red",
        fontSize: 12,
        fontWeight: "bold",
        letterSpacing: 0.2
    }
})