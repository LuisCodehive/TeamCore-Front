import React from 'react';
import { View, Text, Button } from 'react-native';

const CompletionScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Encuesta finalizada. ¡Gracias por tu participación!</Text>
      <Button title="Volver a Inicio" onPress={() => navigation.navigate("HomeScreen")} />
    </View>
  );
};

export default CompletionScreen;
