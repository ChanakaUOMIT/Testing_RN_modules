import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {CalendarList} from 'react-native-calendars';

 
class CalendersList extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View> 
                <CalendarList /*current={'2018-11-25'} */pastScrollRange={24} futureScrollRange={24} />
                <Text> CalendersList </Text>
             </View>
         )
     }
}
 
export default CalendersList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});