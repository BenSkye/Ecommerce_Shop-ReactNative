import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavorites = async () => {
  const data = await AsyncStorage.getItem('favorites');
  return data ? JSON.parse(data) : [];
};

export const saveFavorites = async (favorites) => {
  await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
};

export const clearFavorites = async () => {
  await AsyncStorage.removeItem('favorites');
};
