import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { style } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
// import { DrawerScreenProps } from '@react-navigation/drawer'

// interface Props extends StackScreenProps<any, any> {}
type Props = StackScreenProps<any, any>
// type Props = DrawerScreenProps<any, any>

export const Page1Screen = ( {navigation}: Props) => {
	
	// console.log(props)
	useEffect(() => {
		// Show custom menu
		// navigation.setOptions({
		// 	headerLeft: () => (
		// 		<Button
		// 			title='Menu'
		// 			onPress={() => {navigation.toggleDrawer()}}
		// 		/>
		// 	)
		// })
	}, [])
  
	return (
		<View style={style.globalMargin}>
			<Text style={style.title}>
        Page1Screen
			</Text>

			<Button
				title='Go Pag 2'
				onPress={() => navigation.navigate('Page2Screen')}
			/>

			<Text style={{
				marginVertical: 20,
				fontSize: 20,
				// marginLeft: 5
			}}>
        Navigate with arguments
			</Text>

			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity
					style={{
						...style.bigBtn,
						backgroundColor: '#FF9427',
					}}
					onPress={() => navigation.navigate('PersonScreen', {
						id: 1,
						name: 'Diego'
					})}
				>
					<Text style={style.bigBtnText}>Diego</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						...style.bigBtn,
						backgroundColor: '#5856D6'
					}}
					onPress={() => navigation.navigate('PersonScreen',{
						id: 2,
						name: 'Violetha'
					})}
				>
					<Text style={style.bigBtnText}>Violetha</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
