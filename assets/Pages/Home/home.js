import { StatusBar } from 'react-native';
import {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert  } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from '../../Components/tabnavigation';

export default function Login(){
  return (
        <RootStack></RootStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F00C6',
    color: '#FFFFFF',
  },
  
});
