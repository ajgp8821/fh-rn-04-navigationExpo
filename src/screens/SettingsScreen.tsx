import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { colors, style } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'
import Icon from 'react-native-vector-icons/Ionicons'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SettingsScreen = () => {

	// const insets = useSafeAreaInsets()

	const { authState } = useContext(AuthContext)

	return (
		<View>
			<Text
				style={style.title}
			>
        SettingsScreen
			</Text>
			<Text>{JSON.stringify(authState, null, 2)}</Text>
			{
				authState.favoriteIcon && (
					<Icon
						name={ authState.favoriteIcon }
						size={ 150 }
						color={ colors.primary }
					/>
				)
			}
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
