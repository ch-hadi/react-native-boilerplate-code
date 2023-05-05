import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';
const Tab = createBottomTabNavigator();

function CBottomTab() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconSize = size + 5; // Increase icon size
          let iconMargin = 10; // Set icon margin

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return (
            <View style={{ alignItems: 'center' }}>
              <MaterialIcons
                name={iconName}
                size={iconSize}
                color={color}
                style={{ marginBottom: iconMargin }}
              />
            </View>
          );
        },
      })}
      tabBarOptions={{
        style: { height: 70 }, // Increase tab bar height
        labelStyle: { fontSize: 14 }, // Decrease label font size
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default CBottomTab;
