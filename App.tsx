import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ciudades1,ciudades2,ciudades3,ciudades4 } from './poblacion';

export default function App() {
  console.log("la ciudad con menor poblcion es: ",ciudades1[0]);
  console.log("la ciudad con mayor poblcion es: ",ciudades2[0]);
  console.log("Las ciudades en orden alfabetico:",ciudades3);
  console.log("Las ciudades ordenadas de mayor a menor:",ciudades4);
  
  

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
