import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { style } from '../theme/appTheme'

export const AlbumsScreen = () => {
  
	const { authState, logOut } = useContext(AuthContext)

	return (
		<View style={style.globalMargin}>
			<Text style={style.title}>
        AlbumScreen
			</Text>
			{
				authState.isLoggedIn && <Button title='LogOut' onPress={logOut} />
			}
		</View>
	)
}
