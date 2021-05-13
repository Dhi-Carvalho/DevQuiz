import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { DevIdentification } from '../pages/DevIdentification';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.background
      }
    }}
  >
    <stackRoutes.Screen
      name='Welcome'
      component={Welcome}
    />
    <stackRoutes.Screen
      name='DevIdentification'
      component={DevIdentification}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes;