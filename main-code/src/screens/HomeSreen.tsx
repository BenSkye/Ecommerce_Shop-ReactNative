import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { getArtTools } from '../services/artToolsService';
import { useFavorites } from '../context/FavoritesContext';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const [artTools, setArtTools] = useState([]);
    const { toggleFavorite, favorites } = useFavorites();

    useEffect(() => {
        getArtTools().then(data => setArtTools(data));
    }, []);

    const renderArtTool = ({ item }) => {
        const isFavorite = favorites.some(fav => fav.id === item.id);

        return (
            <Pressable onPress={() => navigation.navigate('Detail', { item })}>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                    <View style={{ marginLeft: 10 }}>
                        <Text>{item.artName}</Text>
                        <Text>${item.price}</Text>
                        {item.limitedTimeDeal > 0 && (
                            <Text style={{ color: 'red' }}>{item.limitedTimeDeal * 100}% OFF</Text>
                        )}
                        <Pressable onPress={() => toggleFavorite(item)}>
                            <Ionicons
                                name={isFavorite ? 'heart' : 'heart-outline'}
                                size={24}
                                color={isFavorite ? 'red' : 'black'}
                            />
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        );
    };

    return (
        <FlatList
            data={artTools}
            renderItem={renderArtTool}
            keyExtractor={item => item.id}
        />
    );
};

export default HomeScreen;
