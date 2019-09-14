import React from 'react';
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";


const API_KEY = "dcbe3d1a1b5e0a575fa55690d05eacfd";

export default class extends React.Component {
  state = {
    isLoading: true,
    condition: "Clear"
  };

 
  getWeather = async(latitude, longitude) => {
    const { 
            data: {
              main: { temp },
              weather
            }
     } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
 
    
    console.log(temp);
    console.log(weather);

  };
  
 
  getLocation = async() => {
    try{
      // 에러 발생기 throw Error();
      await Location.requestPermissionsAsync();
      const { 
        coords: { latitude, longitude } 
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading: false});

      


      } catch (error) {
        Alert.alert("Can't Find you.", "So sad");
      }
       
  };
 
  componentDidMount(){
    this.getLocation();
  }

  render(){

   

    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
    
  }
    
}

