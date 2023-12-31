import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigator from './src/AppNavigator';
//import {AuthProvider} from './src/context/AuthContext';
import {StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <AuthProvider> */}

      <StatusBar backgroundColor="white" barStyle="light-content" />
      <AppNavigator />

      {/* </AuthProvider> */}
    </SafeAreaProvider>
  );
};

export default App;
