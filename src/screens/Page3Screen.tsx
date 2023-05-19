import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { style } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{
  id?: string
}

export const Page3Screen = ({navigation}: Props) => {
	return (
		<View style={style.globalMargin}>
			<Text style={style.title}>
        Page3Screen
			</Text>

			<Button
				title='Go Back'
				onPress={() => navigation.pop()}
			/>
			
			<Button
				title='Go Pag 1'
				onPress={() => navigation.popToTop()}
			/>
		</View>
	)
}
