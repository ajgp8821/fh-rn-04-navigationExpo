import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { /*Platform,*/ Text, View } from 'react-native'
import { colors, style } from '../theme/appTheme'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Tab1Screen = () => {

	// Not necessary for Expo
	// const {top} = useSafeAreaInsets()

	useEffect(() => {
		// console.log('Tab1Screen mounted')
	}, [])
  
	return (
		<View style={{
			...style.globalMargin,
			// marginTop: (Platform.OS === 'ios') ? top + 10 : 0
		}}
		>
			<Text style={style.title}>
        Icons
			</Text>
			<Text>
				<Icon name='airplane-outline' size={50} color={colors.primary} />
				<Icon name='bicycle-outline' size={50} color={colors.primary} />
				<Icon name='bug-outline' size={50} color={colors.primary} />
				<Icon name='battery-charging-outline' size={50} color={colors.primary} />
				<Icon name='cloudy-night' size={50} color={colors.primary} />
				<Icon name='cloud-sharp' size={50} color={colors.primary} />
				<Icon name='cube-sharp' size={50} color={colors.primary} />
				<Icon name='cut' size={50} color={colors.primary} />
				<Icon name='document' size={50} color={colors.primary} />
				<Icon name='document-attach' size={50} color={colors.primary} />
				<Icon name='easel' size={50} color={colors.primary} />
				<Icon name='fast-food' size={50} color={colors.primary} />
				<Icon name='female' size={50} color={colors.primary} />
				<Icon name='female-outline' size={50} color={colors.primary} />
				<Icon name='female-sharp' size={50} color={colors.primary} />
				<Icon name='male' size={50} color={colors.primary} />
				<Icon name='male-outline' size={50} color={colors.primary} />
				<Icon name='male-sharp' size={50} color={colors.primary} />
				<Icon name='male-female' size={50} color={colors.primary} />
				<Icon name='male-female-outline' size={50} color={colors.primary} />
				<Icon name='male-female-sharp' size={50} color={colors.primary} />
				<Icon name='man' size={50} color={colors.primary} />
				<Icon name='man' size={50} color={colors.primary} />
				<Icon name='man-outline' size={50} color={colors.primary} />
				<Icon name='man-sharp' size={50} color={colors.primary} />
				<Icon name='woman' size={50} color={colors.primary} />
				<Icon name='woman-outline' size={50} color={colors.primary} />
				<Icon name='woman-sharp' size={50} color={colors.primary} />
				<Icon name='ios-menu' size={50} color={colors.primary} />
				<Icon name='ios-menu-outline' size={50} color={colors.primary} />
				<Icon name='ios-menu-sharp' size={50} color={colors.primary} />
				<Icon name='menu' size={50} color={colors.primary} />
				<Icon name='menu-outline' size={50} color={colors.primary} />
				<Icon name='menu-sharp' size={50} color={colors.primary} />
				<Icon name='md-menu' size={50} color={colors.primary} />
				<Icon name='md-menu-outline' size={50} color={colors.primary} />
				<Icon name='md-menu-sharp' size={50} color={colors.primary} />
			</Text>
		</View>
	)
}
