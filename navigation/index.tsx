import * as React from 'react';
import { Text } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';
import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';

import SignupScreen from '../screens/SignupScreen';

import { RootStackParamList, RootStackScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import X from "../assets/icons/X.svg";
import Svg from "../components/SvgComponent";
import BottomTabNavigator from './ButtonTabNavigation';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();
//header: (props) => <Header title='Sign Up' statuBarStyle='dark' statusBarColor='#E5E5E5' HeaderLeft={(props: any) => <HeaderButton icon={<Svg svgName={X} />} {...props} />} HeaderRight={(props: any) => <HeaderButton color='#5DB075' onPress={() => navigation.navigate('Root')} title='Login' {...props} />} />
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} options={({ navigation }: RootStackScreenProps<'Signup'>) => ({
        header: (props) => <Header title='Sign Up' statuBarStyle='dark' statusBarColor='#E5E5E5' HeaderLeft={(props: any) => <HeaderButton icon={<Svg svgName={X} />} {...props} />} HeaderRight={(props: any) => <HeaderButton color='#5DB075' onPress={() => navigation.navigate('Root')} title='Login' {...props} />} />,
      }
      )} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
