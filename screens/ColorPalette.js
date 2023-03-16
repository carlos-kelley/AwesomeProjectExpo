import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, palleteName } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.text}>{palleteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: 'white',
  },

  text: {
    fonsSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorPalette;
