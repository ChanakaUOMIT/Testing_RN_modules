import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {CalendarList} from 'react-native-calendars';

 
class HorizontalCalendarList extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View> 
                <Text> HorizontalCalendarList </Text>
                <CalendarList
                    // current={'2018-11-25'}
                    pastScrollRange={24}
                    futureScrollRange={24}
                    horizontal
                    pagingEnabled
                    style={{borderBottomWidth: 1, borderBottomColor: 'black'}}
                />
             </View>
         )
     }
}
 
export default HorizontalCalendarList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});