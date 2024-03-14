// LoginScreen.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>

      <Image
  source={require("./assets/instagram.png")}
  style={{ width: 200 }}
  resizeMode="contain"
/>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonFb}>Continue with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.Or}>OR</Text>
        <View style={styles.line} />
      </View>


      <TextInput
        style={styles.input}
        placeholder="Phone number, username, or email"
      />
      <TextInput
        style={styles.inputPass}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity onPress={this.forgotPass}>
        <Text style={styles.buttonPass}>Forgot password?</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.bttn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLog}>
        <Text style={styles.buttonLogin}>Log in</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  Or: {
    marginHorizontal: 20, 
    marginBottom:10,
    marginTop: 10,
    color: 'gray',
    fontWeight:'bold',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 16,
   
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    paddingHorizontal: 12,
    marginBottom: 5,
    marginTop: 10,

  },
    inputPass: {
      width: '100%',
      height: 48,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 3,
      paddingHorizontal: 12,
      marginBottom: 3,
      marginTop: 0,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width:'100%',
    marginBottom: 20,
  },
  buttonLog: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width:'100%',
    marginBottom: 20,
  },
  bttn: {
    backgroundColor: '4cb5f9',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width:'100%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonFb: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonLogin: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonPass:{
      color: '#2596be',
      backgroundColor: 'white',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal:109,
      width:'100%',
      marginLeft:218,
      marginBottom:8,
      marginTop:0,
  
  },
});

export default LoginScreen;