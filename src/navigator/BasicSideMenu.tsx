import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StackNavigator } from './StackNavigator'
import { SettingsScreen } from '../screens/SettingsScreen'
import { Dimensions, ScaledSize, useWindowDimensions } from 'react-native'

const Drawer = createDrawerNavigator()

// const { width: ww, height: wh }: ScaledSize = Dimensions.get('window')
// const { width: sw, height: sh } = Dimensions.get('screen')

export const BasicSideMenu = () => {

	const { width/*, height: dh*/ } = useWindowDimensions()

	// const dType = ww >= 768 ? 'permanent' : 'front'
	// console.log('dType', dType)
  
	return (
		<Drawer.Navigator
			screenOptions={{
				// drawerPosition:'right'
				drawerType: width >= 768 ? 'permanent' : 'front', // Horizontal mode menu
				// headerShown: false  // Hide the hamburger icon
			}}
		>
			<Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
			<Drawer.Screen name="SettingsScreen" options={{title:'Settings'}} component={SettingsScreen} />
		</Drawer.Navigator>
	)
}
