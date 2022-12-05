import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
      </View>
      <View style={[styles.box, styles.cyan]}>
        <Text style={styles.whitetext}>Cyan #2aa198</Text>
      </View>
      <View style={[styles.box, styles.blue]}>
        <Text style={styles.whitetext}>Blue #268bd2 </Text>
      </View>
      <View style={[styles.box, styles.magenta]}>
        <Text style={styles.whitetext}>Magenta #d33682</Text>
      </View>
      <View style={[styles.box, styles.orange]}>
        <Text style={styles.whitetext}>Orange #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  whitetext: {
    color: 'white',
    fontWeight: 'bold',
  },
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
  },

  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  SafeArea: {
    flex: 1,
  },
  text: {
    fonsSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default App;
