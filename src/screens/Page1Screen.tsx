import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { style } from '../theme/appTheme'

// interface Props extends StackScreenProps<any, any> {}
type Props = StackScreenProps<any, any>

export const Page1Screen = ( {navigation}: Props) => {
	
	// console.log(props)
  
	return (
		<View style={style.globalMargin}>
			<Text style={style.title}>
        Page1Screen
			</Text>

			<Button
				title='Go Pag 2'
				onPress={() => navigation.navigate('Page2Screen')}
			/>

			<Text>Navigate with arguments</Text>
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
