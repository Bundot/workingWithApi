import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/screens/HomePage';
import ImagePage from './src/screens/ImagePage';
import TestingFoints from './src/screens/TestingFonts';
import TestingForm from './src/screens/TestingForm';

export default function App() {
  return (
    <HomePage />
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
