/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as React from 'react';
import { ColorSchemeName, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import PointsScreen from '../screens/PointsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SVG, {Path, G} from 'react-native-svg';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootTabParamList} from '../types';


const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
 const colorScheme = useColorScheme();
 const insets = useSafeAreaInsets();
 const iconSize = 20
 //console.log(insets)

 const HomeIcon = ({ size, color }: any) => (
   <SVG width={size} height={size} viewBox="0 0 20 20" fill="none">
<Path d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V12.5C9.375 12.1583 9.65833 11.875 10 11.875C10.3417 11.875 10.625 12.1583 10.625 12.5V15C10.625 15.3417 10.3417 15.625 10 15.625Z" fill={color}/>
<Path d="M14.6667 18.8H5.33333C3.81666 18.8 2.43333 17.6333 2.18333 16.1417L1.075 9.5C0.891664 8.46667 1.4 7.14167 2.225 6.48333L8 1.85833C9.11667 0.958333 10.875 0.966666 12 1.86667L17.775 6.48333C18.5917 7.14167 19.0917 8.46667 18.925 9.5L17.8167 16.1333C17.5667 17.6083 16.15 18.8 14.6667 18.8ZM9.99167 2.44167C9.55 2.44167 9.10833 2.575 8.78333 2.83333L3.00833 7.46667C2.54166 7.84167 2.20833 8.70833 2.30833 9.3L3.41666 15.9333C3.56666 16.8083 4.44166 17.55 5.33333 17.55H14.6667C15.5583 17.55 16.4333 16.8083 16.5833 15.925L17.6917 9.29167C17.7833 8.70833 17.45 7.825 16.9917 7.45833L11.2167 2.84167C10.8833 2.575 10.4333 2.44167 9.99167 2.44167Z" fill={color}/>
   </SVG>
 );
 const OrdersIcon = ({ size, color }: any) => (
   <SVG width={21} height={size} viewBox="0 0 21 20" fill="none">
    <Path d="M6.10833 16.4167C6.79167 15.6833 7.83334 15.7417 8.43334 16.5417L9.275 17.6667C9.95 18.5583 11.0417 18.5583 11.7167 17.6667L12.5583 16.5417C13.1583 15.7417 14.2 15.6833 14.8833 16.4167C16.3667 18 17.575 17.475 17.575 15.2583V5.86666C17.5833 2.50833 16.8 1.66666 13.65 1.66666H7.35C4.2 1.66666 3.41667 2.50833 3.41667 5.86666V15.25C3.41667 17.475 4.63333 17.9917 6.10833 16.4167Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M7.16667 5.83334H13.8333" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M8 9.16666H13" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
   </SVG>
 );
 const PointsIcon = ({ size, color }: any) => (
   <SVG width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path d="M6.66667 9.5C6.66667 10.1417 7.16667 10.6667 7.775 10.6667H9.025C9.55833 10.6667 9.99167 10.2083 9.99167 9.65C9.99167 9.04167 9.725 8.825 9.33333 8.68333L7.33333 7.98333C6.93333 7.84167 6.66667 7.625 6.66667 7.01667C6.66667 6.45833 7.1 6 7.63333 6H8.88333C9.5 6.00833 10 6.525 10 7.16667" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M8.33333 10.7083V11.325" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M8.33333 5.34167V5.99167" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M8.325 14.9833C12.0023 14.9833 14.9833 12.0023 14.9833 8.325C14.9833 4.6477 12.0023 1.66666 8.325 1.66666C4.64771 1.66666 1.66667 4.6477 1.66667 8.325C1.66667 12.0023 4.64771 14.9833 8.325 14.9833Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M10.8167 16.5667C11.5667 17.625 12.7917 18.3167 14.1917 18.3167C16.4667 18.3167 18.3167 16.4667 18.3167 14.1917C18.3167 12.8083 17.6333 11.5833 16.5917 10.8333" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
   </SVG>
 );
 const SettingsIcon = ({ size, color }: any) => (
   <SVG width={size} height={size} viewBox="0 0 20 20" fill="none">
     <Path d="M3 7.59166V12.4C3 14.1667 3 14.1667 4.66667 15.2917L9.25 17.9417C9.94167 18.3417 11.0667 18.3417 11.75 17.9417L16.3333 15.2917C18 14.1667 18 14.1667 18 12.4083V7.59166C18 5.83333 18 5.83333 16.3333 4.70833L11.75 2.05833C11.0667 1.65833 9.94167 1.65833 9.25 2.05833L4.66667 4.70833C3 5.83333 3 5.83333 3 7.59166Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M10.5 12.5C11.8807 12.5 13 11.3807 13 10C13 8.61929 11.8807 7.5 10.5 7.5C9.11929 7.5 8 8.61929 8 10C8 11.3807 9.11929 12.5 10.5 12.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
   </SVG>
 );

 return (
   <BottomTab.Navigator
     initialRouteName="Home"
     screenOptions={{
         tabBarActiveTintColor: Colors.primary,
         tabBarStyle: [styles.tabContainer, {  height: 65 + insets.bottom}],
         tabBarIconStyle: styles.icon,
         tabBarLabelStyle: styles.label,
         tabBarItemStyle : styles.item,

     }}
     safeAreaInsets = {{
       top: 0,
       left: 0,
       right: 0,
   }}
     >
     <BottomTab.Screen
       name="Home"
       component={HomeScreen}
       options={({
         title: 'Home',
         headerShown: false,
         tabBarIcon: ({ color }) => <HomeIcon size={iconSize} color={color} />,
       })}
     />
     <BottomTab.Screen
       name="Orders"
       component={OrdersScreen}
       options={{
         title: 'Orders',
         headerShown: false,
         tabBarIcon: ({ color }) => <OrdersIcon size={iconSize} color={color} />,
       }}
     />
     <BottomTab.Screen
       name="Points"
       component={PointsScreen}
       options={{
         title: 'Points',
         headerShown: false,
         tabBarIcon: ({ color }) => <PointsIcon size={iconSize} color={color} />,
       }}
     />
     <BottomTab.Screen
       name="Settings"
       component={SettingsScreen}
       options={{
         title: 'Settings',
         headerShown: false,
         tabBarIcon: ({ color }) => <SettingsIcon size={iconSize} color={color} />,
       }}
     />
   </BottomTab.Navigator>
 );
}

const styles = StyleSheet.create({
 label: {
   fontFamily: "space-medium",
   fontSize: 13,
   padding: 0,
   marginBottom: 10,

 },
 tabContainer: {

   borderTopWidth: 0,
   shadowOpacity: 0.02,
   elevation:0.02,


 },
 item  :{

   justifyContent :'center',
   alignSelf : "center",
   alignContent : "center",


 },

 icon: {

   marginTop: 12,
 },
});
