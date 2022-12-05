import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={[styles.container, styles.pink]}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: 'pink',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  SafeArea: {
    flex: 2,
  },
});
export default App;
