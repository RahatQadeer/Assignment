import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function Body() {
  return (
    <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={80} color="#fff" />
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#fff"
          />
           <View style={styles.line} />
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
  },
  background: {
    flex: 1,
  },
  
  logoContainer: {
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 14,
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  line: {
    height: 2,      
    width: '100%',    
    backgroundColor: 'white', 
    marginVertical: 40, 
  },
 
  createAccountText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
});
