import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

import rocket from '../assets/rocket.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function StartChallenge() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>();

  function handleStartQuiz() {
    navigation.navigate('TechSelection')
  }

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@devquiz:user');
      setUserName(user || "");
    }

    loadStorageUserName();
  }, []);
  
  return(
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={['#57B6E5', '#8257E5']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Image
                source={rocket}
                style={styles.icon}
              />
              <Text style={styles.title}>
                Tudo pronto
              </Text>
              <Text style={styles.name}>
                {userName}!
              </Text>
              <Text style={styles.subtitle}>
                Chegou a hora de decolar rumo ao conhecimento!
              </Text>
            </View>
          
            <View style={styles.button}>
              <Button
                title='Começar'
                onPress={handleStartQuiz}
              />
            </View>
          
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    paddingHorizontal: 54,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center'
  },
  icon: {
    width: 150,
    height: 150
  },
  title: {
    marginTop: 64,
    fontFamily: fonts.percent,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.shape
  },
  name: {
    fontFamily: fonts.percent,
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'center',
    color: colors.green
  },
  subtitle: {
    fontFamily: fonts.subtitle,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    color: colors.shape,
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  button: {
    width: '100%',
    marginTop: 60,
    paddingHorizontal: 30
  }
})
