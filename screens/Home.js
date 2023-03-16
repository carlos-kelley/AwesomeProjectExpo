import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PalettePreview from '../components/PallettePreview';

const Home = ({ navigation }) => {
  const [colors, setColors] = useState([]);

  const handleFetchColors = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    if (response.ok) {
      const colors = await response.json();
      setColors(colors);
    }
  }, []);

  useEffect(() => {
    handleFetchColors();
  }, []);

  return (
    <View>
      <FlatList
        style={styles.list}
        data={colors}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', item);
            }}
            colorPalette={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
