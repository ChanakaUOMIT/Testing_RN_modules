import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
 
class GeoLocation extends Component{
    constructor(props){
        super(props);

        this.state = {
            location:null,
            latitude: null,
            longitude: null,
            timestamp:null,
            speed:null,
            error: null,
          };
    } 

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              timestamp:position.timestamp,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              speed:position.coords.speed,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
      }

      findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const location = JSON.stringify(position);
    
            this.setState({ location });
          },
          error => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      };

    consolPrint(){
        // console.log("latitude "+this.state.latitude);
        // console.log("longitude "+this.state.longitude);
        console.log("Hello");
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('timestamp'+position.timestamp),
                console.log('latitude'+ position.coords.latitude),
                console.log('longitude'+ position.coords.longitude),
                console.log('speed'+position.coords.speed),
                console.log('error'+ null)
              
            },
          );
    }


     render(){
        return(
            <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
                <Text>Timestamp: {this.state.timestamp}</Text>
                <Text>speed: {this.state.speed}</Text>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}

                <TouchableOpacity onPress={this.consolPrint}>
                    <Text>consolPrint</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.findCoordinates}>
                    <Text style={styles.welcome}>Find My Coords?</Text>
                    <Text>Location: {this.state.location}</Text>
                </TouchableOpacity>
            </View>
         )
     }
}
 
export default GeoLocation;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
      },
      welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
      },
      instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
      }
});