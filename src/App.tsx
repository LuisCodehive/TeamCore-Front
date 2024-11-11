import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider style={{backgroundColor:"#fff"}}>
      <NavigationContainer>
        <HomeScreen navigation={undefined} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


