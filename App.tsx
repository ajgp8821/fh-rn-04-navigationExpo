import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { NavigationContainer /*, DefaultTheme*/ } from '@react-navigation/native'
import * as ScreenOrientation from 'expo-screen-orientation'
import { SideMenu } from './src/navigator/SideMenu'
import { AuthProvider } from './src/context/AuthContext'
// import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, View } from 'react-native'
// import { StackNavigator } from './src/navigator/StackNavigator'
// import { BasicSideMenu } from './src/navigator/BasicSideMenu'
// import { style } from './src/theme/appTheme'
// import { Tabs } from './src/navigator/Tabs'

export default function App() {
	// console.log(DefaultTheme)

	useEffect(() => {
		// Enable rotation
		ScreenOrientation.unlockAsync()
	}, [])
  
	return (
		// <View style={styles.container}>
		<NavigationContainer
			// theme={MyTheme}
		>
			<AppState>
				{/* <StackNavigator /> */}
				{/* <BasicSideMenu /> */}
				<SideMenu />
				{/* <Tabs /> */}
				{/* <StatusBar style="auto" /> */}
			</AppState>
		</NavigationContainer>
	)
}

// const AppState = ({children}: {children: JSX.Element[]}) => {
const AppState = ({children}: any) => {
	return (
		<AuthProvider>
			{children}
		</AuthProvider>
	)
}

// const MyTheme = {
// 	dark: false,
// 	colors: {
// 		primary: 'rgb(255, 45, 85)',
// 		background: 'rgb(242, 242, 242)',
// 		card: 'rgb(200, 200, 200)',
// 		text: 'rgb(28, 28, 30)',
// 		border: 'rgb(199, 199, 204)',
// 		notification: 'rgb(255, 69, 58)',
// 	},
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// })
