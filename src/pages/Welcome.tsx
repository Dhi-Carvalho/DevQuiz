import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import logo from '../assets/logo.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem vindo Dev!
      </Text>
      <Image 
        source={logo}
        style={styles.image}
        resizeMode= 'contain'
      />
      <Text style={styles.subtitle}>
        Pronto para testar seus conhecimentos no universo da programação?
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
      >
        <AntDesign 
          name='play'
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.purple
  },
  title: {
    fontFamily: fonts.title,
    fontSize: 30,
    color: colors.background,
    
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  subtitle: {
    fontFamily: fonts.subtitle,
    fontSize: 18,
    lineHeight: 24,
    color: colors.background,
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 60,
    width: 60
  },
  buttonIcon: {
    color: colors.shape,
    fontSize: 40
  }
});