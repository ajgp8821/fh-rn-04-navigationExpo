import React, { useEffect } from 'react'
import { /*Platform,*/ Text, View } from 'react-native'
import { colors, style } from '../theme/appTheme'
import { TouchableIcon } from '../components/TouchableIcon'
// import Icon from 'react-native-vector-icons/Ionicons'
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
				<TouchableIcon name='airplane-outline' />
				<TouchableIcon name='bicycle-outline' />
				<TouchableIcon name='bug-outline' />
				<TouchableIcon name='battery-charging-outline' />
				<TouchableIcon name='cloudy-night' />
				<TouchableIcon name='cloud-sharp' />
				<TouchableIcon name='cube-sharp' />
				<TouchableIcon name='cut' />
				<TouchableIcon name='document' />
				<TouchableIcon name='document-attach' />
				<TouchableIcon name='easel' />
				<TouchableIcon name='fast-food' />
				<TouchableIcon name='female' />
				<TouchableIcon name='female-outline' />
				<TouchableIcon name='female-sharp' />
				<TouchableIcon name='male' />
				<TouchableIcon name='male-outline' />
				<TouchableIcon name='male-sharp' />
				<TouchableIcon name='male-female' />
				<TouchableIcon name='male-female-outline' />
				<TouchableIcon name='male-female-sharp' />
				<TouchableIcon name='man' />
				<TouchableIcon name='man' />
				<TouchableIcon name='man-outline' />
				<TouchableIcon name='man-sharp' />
				<TouchableIcon name='woman' />
				<TouchableIcon name='woman-outline' />
				<TouchableIcon name='woman-sharp' />
				<TouchableIcon name='ios-menu' />
				<TouchableIcon name='ios-menu-outline' />
				<TouchableIcon name='ios-menu-sharp' />
				<TouchableIcon name='menu' />
				<TouchableIcon name='menu-outline' />
				<TouchableIcon name='menu-sharp' />
				<TouchableIcon name='md-menu' />
				<TouchableIcon name='md-menu-outline' />
				<TouchableIcon name='md-menu-sharp' />
			</Text>
		</View>
	)
}
