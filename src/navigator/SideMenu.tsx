import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerScreenProps, createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import { SettingsScreen } from '../screens/SettingsScreen'
import { colors, style } from '../theme/appTheme'
import { Image, Text, TouchableOpacity, View, useWindowDimensions/*, ScaledSize, Dimensions*/ } from 'react-native'
import { Tabs } from './Tabs'
import { DrawerActions } from '@react-navigation/native'
// import { StackNavigator } from './StackNavigator'
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
			screenOptions={({navigation}) => ({
				// drawerPosition:'right'
				drawerType: width >= 768 ? 'permanent' : 'front', // Horizontal mode menu
				// headerShown: false,  // Hide the hamburger icon
				headerLeft: () => (
					// Change menu icon
					<TouchableOpacity
						style={{
							marginLeft: 20,
						}}
						onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }
					>
						<Icon name='menu-outline' size={23} color={colors.primary} />
					</TouchableOpacity>
				)
			})}
			// initialRouteName='Tabs'
			drawerContent={(props) => <InternalMenu {...props}/>}
		>
			<Drawer.Screen name="Tabs" component={Tabs} />
			<Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
			{/* <Drawer.Screen name="SettingsScreen" component={SettingsStackScreen} /> */}
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
					style= {{
						...style.menuBtn,
						flexDirection: 'row'
					}}
					onPress={() => navigation.navigate('Tabs')}
				>
					<Icon name='compass-outline' size={23} color='grey' />
					<Text style={style.menuText}> Navigation</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style= {{
						...style.menuBtn,
						flexDirection: 'row'
					}}
					onPress={() => navigation.navigate('SettingsScreen')}
				>
					<Icon name='settings-outline' size={23} color='grey' />
					<Text style={style.menuText}> Settings</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	)
}
