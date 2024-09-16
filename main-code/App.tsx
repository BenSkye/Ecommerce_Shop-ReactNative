import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigation';
import FavoritesProvider from './src/context/FavoritesContext';

const App = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default App;
