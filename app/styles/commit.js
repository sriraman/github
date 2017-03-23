import { StyleSheet } from 'react-native'

var commitStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 10,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
		backgroundColor: '#f5f5f5'
	},
	avatar: {
		width: 25,
		height: 25,
		borderRadius: 13
	},
	authorContainer: {
		flex: 1,
		flexDirection: 'row'
	},
	authorName: {
		fontWeight: 'bold',
		paddingLeft: 10,
		alignSelf: 'center'
	},
	timeAgo: {
		color: '#ccc'
	}
})

module.exports = commitStyles
