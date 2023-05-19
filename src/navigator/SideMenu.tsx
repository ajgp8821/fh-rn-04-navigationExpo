import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'
import { StackNavigator } from './StackNavigator'
import { SettingsScreen } from '../screens/SettingsScreen'
import { Dimensions, Image, ScaledSize, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { style } from '../theme/appTheme'
// import { createStackNavigator } from '@react-navigation/stack'

const Drawer = createDrawerNavigator()

// No longer necessary
// const Stack = createStackNavigator()
// const SettingsStackScreen = () => {
// 	return (
// 		<Stack.Navigator>
// 			<Stack.Screen
// 				name="SettingsScreen"
// 				component={SettingsScreen}
// 			/>
// 		</Stack.Navigator>
// 	)
// }

export const SideMenu = () => {

	const { width/*, height: dh*/ } = useWindowDimensions()
  
	return (
		<Drawer.Navigator
			screenOptions={{
				// drawerPosition:'right'
				drawerType: width >= 768 ? 'permanent' : 'front', // Horizontal mode menu
				// headerShown: false  // Hide the hamburger icon
			}}
			drawerContent={(props) => <InternalMenu {...props}/>}
		>
			<Drawer.Screen name="StackNavigator" component={StackNavigator} />
			<Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
		</Drawer.Navigator>
	)
}

const InternalMenu = ({navigation}: DrawerContentComponentProps) => {
	return (
		<DrawerContentScrollView>
			{/* Avatar */}
			<View style={style.avatarContainer}>
				<Image
					source={{
						uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg'
					}}
					style={style.avatar}
				/>
			</View>

			{/* Menu Options */}
			<View style={style.menuOptions}>
				<TouchableOpacity 
					style= {style.menuBtn}
					onPress={() => navigation.navigate('StackNavigator')}
				>
					<Text style={style.menuText}>Navigation</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style= {style.menuBtn}
					onPress={() => navigation.navigate('SettingsScreen')}
				>
					<Text style={style.menuText}>Settings</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	)
}
