import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import UserImg from '../assets/UserPhoto.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { LinearGradient } from 'expo-linear-gradient';

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@devquiz:user');
      setUserName(user || "");
    }

    loadStorageUserName();
  }, []);
  
  return (
    <View>
      <LinearGradient
      style={styles.container}
        colors={['#57B6E5', '#8257E5']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
      <View style={styles.content}>
        <Text style={styles.greeting}>
          Olá, {userName}
        </Text>
      </View>
      <View style={styles.content}>
        <Image 
          source={UserImg}
          style={styles.image}
        />
      </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: getStatusBarHeight(),
    
  },
  content: {
    paddingHorizontal: 30
  },
  greeting: {
    fontFamily: fonts.title,
    fontSize: 24,
    lineHeight: 36,
    color: colors.shape
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 30,
    marginBottom: 10
  }
})