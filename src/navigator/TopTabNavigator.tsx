import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ChatScreen } from '../screens/ChatScreen'
import { ContactsScreen } from '../screens/ContactsScreen'
import { AlbumsScreen } from '../screens/AlbumsScreen'

import { LogBox, Text } from 'react-native'
import { colors } from '../theme/appTheme'
LogBox.ignoreLogs(['Sending'])
// LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.',])

export type TopTabNavigatorParams = {
  ChatScreen: undefined,
  ContactsScreen: undefined,
  AlbumsScreen: undefined,
}

const Tab = createMaterialTopTabNavigator<TopTabNavigatorParams>()

export const TopTabNavigator = () => {

	// Not necessary for Expo
	// const {top: paddingTop} = useSafeAreaInsets()

	return (
		<Tab.Navigator
			// style={{
			// 	paddingTop: paddingTop
			// }}
			sceneContainerStyle={{
				backgroundColor: 'white'
			}}
			screenOptions={({route}) => ({
				tabBarPressColor: colors.primary,
				tabBarShowIcon: true,
				tabBarIndicatorStyle: {
					// backgroundColor: colors.primary,
				},
				tabBarStyle: {
					borderTopColor: colors.primary,
					borderTopWidth: 0,
					shadowColor: 'transparent',
					elevation: 0,
				},
				tabBarIcon: ({color, focused}) => {
					// console.log(route)

					let iconName = ''
					switch (route.name) {
					case 'ChatScreen':
						iconName = 'CH'
						break
					case 'ContactsScreen':
						iconName = 'CO'
						break
					case 'AlbumsScreen':
						iconName = 'AL'
						break
					}
          
					return <Text style={{color}}>{iconName}</Text>
				}
			})}
		>
			<Tab.Screen name="ChatScreen" options={{title:'Chat'}} component={ChatScreen} />
			<Tab.Screen name="ContactsScreen" options={{title:'Contacts'}} component={ContactsScreen} />
			<Tab.Screen name="AlbumsScreen" options={{title:'Albums'}} component={AlbumsScreen} />
		</Tab.Navigator>
	)
}
