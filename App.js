import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Register from './src/components/register/Register';
import Calendar from './src/components/calender/Calender';
import CalendarsList from './src/components/calender/CalendersList';
import HorizontalCalendarList from './src/components/calender/HorizontalCalendarList';
import GeoLocation from './src/components/geoLocation/GeoLocation';
import Location from './src/components/Location/Location';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        {/* <Register /> */}
        {/* <Calendar /> */}
        {/* <CalendarsList /> */}
        {/* <HorizontalCalendarList /> */}
        {/* <GeoLocation /> */}
        <Location />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
