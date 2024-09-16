import React from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import { Ionicons } from '@expo/vector-icons';

const FavoritesScreen = () => {
    const { favorites, removeFavorite } = useFavorites();

    const renderFavorite = ({ item }) => (
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            <View style={{ marginLeft: 10 }}>
                <Text>{item.artName}</Text>
                <Text>${item.price}</Text>
                <Pressable onPress={() => removeFavorite(item.id)}>
                    <Ionicons name="trash" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );

    return (
        <FlatList
            data={favorites}
            renderItem={renderFavorite}
            keyExtractor={item => item.id}
        />
    );
};

export default FavoritesScreen;
