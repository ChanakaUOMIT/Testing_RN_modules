import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View,
        TextInput,
        TouchableHighlight
    } from 'react-native';

class Register extends Component{
    constructor(){
        super();

        this.state={
            name:"",
            email:"",
            password:"",
            password_confirmation:"",
            errors:[],
        }
    }

    async onRegisterPressed(){
        try{
            let response = await fetch('https://afternoon-beyond-22141.herokuapp.com/api/users',{
                method:'POST',
                header:{
                    'Accept' : 'application/json',
                    'Content_Type':'application/json'
                },
                body: JSON.stringify({
                    user:{
                        name:this.state.name,
                        email:this.state.email,
                        password:this.state.password,
                        password_confirmation:this.state.password_confirmation
                    }
                })
            });

            let res=await response.text();
            console.log("res is : "+res);

        }catch(error){

        }
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Register</Text>
        <TextInput 
            onChangeText={(val) => this.setState({email: val})}
            style={styles.input} 
            placeholder="Email"
        />

        <TextInput 
            onChangeText={(val) => this.setState({email: val})}
            style={styles.input} 
            placeholder="Name"
        />

        <TextInput 
            onChangeText={(val) => this.setState({email: val})}
            style={styles.input} 
            placeholder="Password"
            secureTextEntry={true}
        />

        <TextInput 
            onChangeText={(val) => this.setState({email: val})}
            style={styles.input} 
            placeholder="Confirm Password"
            secureTextEntry={true}
        />

        <TouchableHighlight style={styles.button} onPress={this.onRegisterPressed.bind(this)} >
            <Text style={styles.buttonText}>
                Register
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// const Error = (props) => {
//     return(
//         <View>
//             {props.error.map((error, i) => <Text key={i} style={styles.error}>{error}</Text>)}
//         </View>
//     )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:10,
    paddingTop: 80
  },

  input:{
      height: 50,
      width: 300,
      marginTop: 10,
      padding: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48bbec',
  },

  button:{
      height:50,
      backgroundColor: '#48BBEC',
      alignSelf: 'stretch',
      marginTop: 10,
      justifyContent: 'center'
  },

  buttonText:{
      fontSize: 22,
      color:'#FFF',
      alignSelf:'center'
  },
  heading:{
      fontSize:30,
  },
  error:{
      color:'red',
      paddingTop:10
  },
  loader:{
      marginTop:20,
  }

});

export default Register;