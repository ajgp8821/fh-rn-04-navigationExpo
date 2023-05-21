import { StyleSheet } from 'react-native'

export const colors = {
	// primary: '#00BCD4',
	primary: '#5856D6',
}

export const style = StyleSheet.create({
	globalMargin: {
		marginHorizontal: 20
	},
	title: {
		fontSize: 30,
		marginBottom: 10
	},
	bigBtn: {
		width: 100,
		height: 100,
		backgroundColor: 'red',
		borderRadius:20,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10
	},
	bigBtnText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold'
	},
	avatarContainer: {
		// backgroundColor: 'rgb(200, 200, 200)',
		alignItems: 'center',
		marginTop: 10
	},
	avatar: {
		width: 150,
		height: 150,
		borderRadius: 100,
	},
	menuOptions: {
		// backgroundColor: 'red',
		marginVertical: 30,
		marginHorizontal: 30,
		// alignItems: 'center'
	},
	menuBtn: {
		marginVertical: 10
	},
	menuText: {
		fontSize: 20
	}
})
