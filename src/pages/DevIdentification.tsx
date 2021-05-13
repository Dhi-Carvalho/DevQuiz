import React, { useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

import astronaut from '../assets/astronaut.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function DevIdentification() {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }
  
  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if(!name)
      return Alert.alert(
        'DevQuiz',
        'Um astronauta deve ter um nome');
    
      try{
        await AsyncStorage.setItem('@devquiz:user', name);
        navigation.navigate('StartChallenge')
      }catch{
        Alert.alert('Não foi possível salvar o seu nome.')
      }
    
  }
  
  return(
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={['#57B6E5', '#8257E5']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
      >
        <KeyboardAvoidingView
          style={styles.container}  
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>
              <View style={styles.form}>
                <View style={styles.header}>
                  <Image 
                    source={astronaut}
                    style={styles.icon}
                  />
                  <Text style={styles.title}>
                    Como devo te chamar astronauta?
                  </Text>
                </View>

                <TextInput
                    style={[
                      styles.input,
                      (isFocused || isFilled) &&
                      {borderColor: colors.green}
                    ]}
                    placeholder='Digite seu nome'
                    placeholderTextColor={colors.shape}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                />

                <View style={styles.button}>
                  <Button
                    title='Confirmar'
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
    fontFamily: fonts.percent,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.shape,
    marginTop: 20
  },
  input: {
    borderBottomWidth: 2,
    borderColor: colors.background,
    color: colors.shape,
    width: '100%',
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'center',
    marginTop: 50,
    padding: 10
  },
  button: {
    width: '100%',
    marginTop: 60,
    paddingHorizontal: 30
  }
})