import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIndex from '../view/growers/index';
import bestGrowers from '../view/growers/bestGrowers';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeIndex} />
            <Tab.Screen name="Settings" component={bestGrowers} />
        </Tab.Navigator>
    </NavigationContainer>
}