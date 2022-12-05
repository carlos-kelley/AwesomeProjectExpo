import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
      </View>
      <View>
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
        <ColorBox colorName="Blue" colorHex="#268bd2" />
        <ColorBox colorName="Magenta" colorHex="#d33682" />
        <ColorBox colorName="Orange" colorHex="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },

  text: {
    fonsSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default App;
