import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Page1Screen = () => {
	return (
		<View style={styles.container}>
			<Text>
        Page1Screen
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		height: '100%',
	}
})
