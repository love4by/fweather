import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

       

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
     },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#E5E5BE", "#003973"]
    },
    Mist: {
        iconName: "weather-sunset",
        gradient: ["#4DA0B0", "#D39D38"]
    }
}


export default function Weather({ temp, condition }){
    return (
        
            

              <LinearGradient 
                colors={weatherOptions["Mist"].gradient} 
                style={styles.container}
              >

                    <StatusBar barStyle="light-content" />

                    <View style={styles.halfContainer}>
                        <MaterialCommunityIcons 
                        size={96} 
                        name={weatherOptions["Mist"].iconName} 
                        color="white"
                        />
                        
                        <Text style={styles.temp}>{temp}º</Text>
                    </View>
                    <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
                        <Text style={styles.title}>In case this is too long</Text>
                        <Text style={styles.subtitle}>and this one as well then?</Text>
                    </View>

               </LinearGradient>


    );  
}
 
Weather.prototype = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Haze", 
        "Rain", 
        "Mist"     
    ]).isRequired

};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },  
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})