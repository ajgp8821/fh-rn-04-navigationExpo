import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { StackScreenProps } from '@react-navigation/stack'
import { style } from '../theme/appTheme'
import { RootStackParams } from '../navigator/StackNavigator'
// import { useNavigation } from '@react-navigation/native'

// interface RouterParams {
//   id: number,
//   name: string
// }

// interface Props extends StackScreenProps<any, any>{}
type Props = StackScreenProps<RootStackParams, 'PersonScreen'>

export const PersonScreen = ({route, navigation}: Props) => {

	// console.log(JSON.stringify(props, null, 2))
	// const params = route.params as RouterParams
	const params = route.params
	
	const options: StackNavigationOptions = {
		title: params.name
	}
	
	useEffect(() => {
		navigation.setOptions(options)
	}, [])

	return (
		<View style={style.globalMargin}>
			<Text style={style.title}>
        PersonScreen
				{
					JSON.stringify(params, null, 2)
				}
			</Text>
		</View>
	)
}
