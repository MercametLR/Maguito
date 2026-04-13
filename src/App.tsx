import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Add dashboard content here */}
    </div>
  );
};

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      {/* Add settings content here */}
    </div>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;