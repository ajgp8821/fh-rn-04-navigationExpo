import React from 'react'
import { Text, View } from 'react-native'
import { style } from '../theme/appTheme'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SettingsScreen = () => {

	// const insets = useSafeAreaInsets()

	return (
		<View>
			<Text
				style={style.title}
			>
        SettingsScreen
			</Text>
		</View>
	)

	// No longer necessary
	// return (
	// 	<View style={{
	// 		...style.globalMargin,
	// 		marginTop: insets.top + 20
	// 	}}>
	// 		<Text>
	//     SettingsScreen
	// 		</Text>
	// 	</View>
	// )
}
