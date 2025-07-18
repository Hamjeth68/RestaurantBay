import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import RestaurantListScreen from './src/screens/RestaurantListScreen';
import MenuScreen from './src/screens/MenuScreen';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="RestaurantList"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="RestaurantList"
            component={RestaurantListScreen}
          />
          <Stack.Screen
            name="Menu"
            component={MenuScreen}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
