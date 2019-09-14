import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

       

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["blue", "blue"]
    },
    Drizzle: {
        iconName: "weather-pouring",
        gradient: ["blue", "red"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["red", "yellow"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["yellow", "green"]
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["green", "black"]
    },
    Mist: {
        iconName: "weather-sunset",
        gradient: ["black", "yellow"]
    },
    Smoke: {
        iconName: "weather-lightning-rainy",
        gradient: ["yellow", "blue"]
    },
    Haze: {
        iconName: "weather-night",
        gradient: ["blue", "black"]
    },
    Dust: {
        iconName: "weather-partlycloudy",
        gradient: ["indigo", "indigo"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["olive", "olive"]
    },
    Sand: {
        iconName: "weather-sunset-down",
        gradient: ["pink", "pink"]
    },
    Ash: {
        iconName: "weather-sunset-up",
        gradient: ["salmon", "salmon"]
    },
    Squall: {
        iconName: "weather-hurricane",
        gradient: ["tan", "tan"]
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["brown", "brown"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["orange", "orange"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["gray", "gray"]
    }

}


export default function Weather({ temp, condition }){
    console.log(condition);
    return (
        
              <LinearGradient 
                colors={weatherOptions[condition].gradient} 
                style={styles.container}
              >

                    <StatusBar barStyle="light-content" />

                    <View style={styles.halfContainer}>
                        <MaterialCommunityIcons 
                        size={96} 
                        name={weatherOptions[condition].iconName} 
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
 
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds" 
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