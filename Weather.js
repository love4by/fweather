import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

       

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#3A6073", "#16222A"]
    },
    Drizzle: {
        iconName: "weather-pouring",
        gradient: ["#26D0CE", "#1A2980"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#E5E5BE", "#003973"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Mist: {
        iconName: "weather-sunset",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Smoke: {
        iconName: "weather-lightning-rainy",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Haze: {
        iconName: "weather-night",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
        iconName: "weather-partlycloudy",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Sand: {
        iconName: "weather-sunset-down",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Ash: {
        iconName: "weather-sunset-up",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Squall: {
        iconName: "weather-hurricane",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#4DA0B0", "#D39D38"]
    }

}


export default function Weather({ temp, condition }){
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