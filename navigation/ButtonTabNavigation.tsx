import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Profile from '../screens/ProfileScreen';
import Insight from '../screens/InsightScreen';
import { RootTabParamList, RootTabScreenProps } from '../types';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import TabFiveScreen from '../screens/TabFiveScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                tabBarStyle: [
                    {
                        display: "flex",
                        height: 60,
                        backgroundColor: '#FAFAFA',
                        borderTopWidth: 1,
                        borderTopColor: '#BDC5CD'
                    },
                    null,
                ],
            }}>
            <BottomTab.Screen
                name="TabOne"
                component={Profile}
                options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <View style={{ width: 35, height: 35, borderRadius: 35, marginTop: 10, backgroundColor: focused ? '#5DB075' : '#E8E8E8' }} />,
                })}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={Insight}
                options={{
                    title: 'Insight',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <View style={{ width: 35, height: 35, borderRadius: 35, marginTop: 10, backgroundColor: focused ? '#5DB075' : '#E8E8E8' }} />
                }}
            />
            <BottomTab.Screen
                name="TabThree"
                component={TabThreeScreen}
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <View style={{ width: 35, height: 35, borderRadius: 35, marginTop: 10, backgroundColor: focused ? '#5DB075' : '#E8E8E8' }} />
                }}
            />
            <BottomTab.Screen
                name="TabFour"
                component={TabFourScreen}
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <View style={{ width: 35, height: 35, borderRadius: 35, marginTop: 10, backgroundColor: focused ? '#5DB075' : '#E8E8E8' }} />
                }}
            />
            <BottomTab.Screen
                name="TabFive"
                component={TabFiveScreen}
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <View style={{ width: 35, height: 35, borderRadius: 35, marginTop: 10, backgroundColor: focused ? '#5DB075' : '#E8E8E8' }} />
                }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}