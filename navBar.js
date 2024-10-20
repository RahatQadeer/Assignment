import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export function Nav() {
  return (
    <View style={styles.container}>
      {/* <LinearGradient colors={['#f56d91', '#f89e54']} style={styles.background}> */}
        <View style={styles.navbar}>
          <Ionicons name="menu" size={24} color="#f56d91" style={styles.menuIcon} />
          <Text style={styles.navText}>REGISTRATION</Text>
          <Ionicons name="add" size={24} color="#f56d91" style={styles.rightIcon} />
        </View>
       
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
    position: 'absolute',
    top: 50, 
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  menuIcon: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  navText: {
    flex: 2,
    textAlign: 'center',
    color: '#f56d91',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightIcon: {
    flex: 1,
    alignSelf: 'flex-end',
    textAlign: 'right',
  }
});