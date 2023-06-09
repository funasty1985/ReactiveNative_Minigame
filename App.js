import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={["#4e0329", "#dd52f"]}
      style={styles.rootScreen}
    >
      <StartGameScreen/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // backgroundColor: "#ddb52f",
    flex: 1, // get up all the space of a screen
  }
});