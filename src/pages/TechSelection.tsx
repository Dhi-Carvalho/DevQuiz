import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import colors from '../styles/colors';

export function TechSelection() {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
      </View>
      <Text>
        Em qual tecnologia quer começar?
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    
  }
})