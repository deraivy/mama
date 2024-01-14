import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/splash';
import AuthNav from './components/authentivation/authNav';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AuthNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
