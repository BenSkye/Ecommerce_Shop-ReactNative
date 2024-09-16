import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext({
    favorites: [],
    toggleFavorite: (item: any) => { },
    removeFavorite: (id: number) => { }
});

export const useFavorites = () => useContext(FavoritesContext);

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('favorites').then(data => {
            if (data) {
                setFavorites(JSON.parse(data));
            }
        });
    }, []);

    const saveFavorites = async (updatedFavorites) => {
        setFavorites(updatedFavorites);
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const toggleFavorite = (item) => {
        const exists = favorites.some(fav => fav.id === item.id);
        const updatedFavorites = exists
            ? favorites.filter(fav => fav.id !== item.id)
            : [...favorites, item];

        saveFavorites(updatedFavorites);
    };

    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter(fav => fav.id !== id);
        saveFavorites(updatedFavorites);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;
