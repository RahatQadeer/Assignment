import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export function Footer() {
  return (
    <View style={styles.container}>
       <View style={styles.navbar}>
          <Ionicons name="search" size={24} color="#ffff" style={styles.menuIcon} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#ffff" style={styles.rightIcon} />
        </View>
           <TouchableOpacity>
            <Text style={styles.createAccountText}>Create an account!</Text>
          </TouchableOpacity> 
                  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
  top:-80,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  navText: {
    flex: 2,
    textAlign: 'center',
    color: '#f56d91',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#f56d91',
    fontSize: 18,
  },
  createAccountText: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
marginLeft:45,
marginRight:45,
    textAlign: 'center',

  },
});