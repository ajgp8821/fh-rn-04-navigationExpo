import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { style } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

export const ContactsScreen = () => {

	const {signIn, authState} = useContext(AuthContext)

	return (
		<View style={style.globalMargin}>
			<Text style={style.title}>
				{
					!authState.isLoggedIn && <Button title='SignIn' onPress={signIn} />
				}
			</Text>
		</View>
	)
}
