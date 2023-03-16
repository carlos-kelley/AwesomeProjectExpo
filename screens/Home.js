import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import PalettePreview from '../components/PallettePreview';

const Home = ({ navigation }) => {
  const [colors, setColors] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchColors = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    if (response.ok) {
      const palettes = await response.json();
      setColors(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchColors();
  }, [handleFetchColors]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchColors();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [handleFetchColors]);

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
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPaletteModal');
            }}
          >
            <Text>Launch Modal</Text>
          </TouchableOpacity>
        }
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
