import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab1Screen } from '../screens/Tab1Screen'
import { Tab2Screen } from '../screens/Tab2Screen'
// import { Tab3Screen } from '../screens/Tab3Screen'
import { StackNavigator } from './StackNavigator'
import { colors } from '../theme/appTheme'

export type StackTabsParams = {
  Tab1Screen: undefined,
  Tab2Screen: undefined,
  StackNavigator: undefined,
}

const Tab = createBottomTabNavigator<StackTabsParams>()

export const Tabs = () => {
	return (
		<Tab.Navigator
			sceneContainerStyle={{
				backgroundColor: 'white'
			}}
			screenOptions={ ({route}) => ({
				tabBarActiveTintColor: colors.primary,
				tabBarStyle: {
					borderTopColor: colors.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarLabelStyle: {
					fontSize: 15
				},
				tabBarIcon: ({color, focused, size}) => {
					console.log(route)

					let iconName = ''
					switch (route.name) {
					case 'Tab1Screen':
						iconName = 'T1'
						break
					case 'Tab2Screen':
						iconName = 'T2'
						break
					case 'StackNavigator':
						iconName = 'T3'
						break
					}
          
					return <Text style={{color}}>{iconName}</Text>
				}
			})}
		>
			{/* <Tab.Screen name="Tab1Screen" options={{title:'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
			<Tab.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
			<Tab.Screen name="Tab2Screen" options={{title:'Tab2'}} component={Tab2Screen} />
			<Tab.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
		</Tab.Navigator>
	)
}