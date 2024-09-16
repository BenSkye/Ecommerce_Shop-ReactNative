import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import { Ionicons } from '@expo/vector-icons';

const DetailScreen = ({ route }) => {
    const { item } = route.params;
    const { toggleFavorite, favorites } = useFavorites();

    const isFavorite = favorites.some(fav => fav.id === item.id);

    return (
        <View style={{ padding: 20 }}>
            <Image source={{ uri: item.image }} style={{ width: 300, height: 300 }} />
            <Text>{item.artName}</Text>
            <Text>${item.price}</Text>
            <Text>{item.description}</Text>
            <Pressable onPress={() => toggleFavorite(item)}>
                <Ionicons
                    name={isFavorite ? 'heart' : 'heart-outline'}
                    size={24}
                    color={isFavorite ? 'red' : 'black'}
                />
            </Pressable>
        </View>
    );
};

export default DetailScreen;
