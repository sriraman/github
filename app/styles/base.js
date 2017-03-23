import { StyleSheet, Dimensions, Platform } from 'react-native'

var baseStyles = StyleSheet.create({
	whiteContainerWithHeader: {
		backgroundColor: '#fff',
		marginTop: 60,
		flex: 1
	},
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 150,
		height: 150,
		alignSelf: 'center'
	},
	textboxContainer: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#000',
		margin: 10,
		borderRadius: 10
	},
	textbox: {
		flex: 1,
		paddingLeft: 10
	},
	goButton: {
		backgroundColor: '#000',
		padding: 10,
		borderRadius: 10,
		margin: 10
	},
	goButtonText: {
		color: '#fff',
		fontSize: 22,
		textAlign: 'center'
	},
	welcomeContainer: {
		padding: 10,
		flexDirection: 'row'
	},
	avatar: {
		height: 25,
		width: 25,
		borderRadius: 13,
		marginRight: 10,
		marginLeft: 10
	},
	username: {
		fontWeight: 'bold'
	},
	errorMessage: {
		fontWeight: 'bold',
		color: 'red',
		textAlign: 'center',
		margin: 10
	}
})

module.exports = baseStyles
