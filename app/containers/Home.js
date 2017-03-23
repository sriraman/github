import React, { Component } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import baseStyles from '../styles/base'
import { Actions } from 'react-native-router-flux'

class Home extends Component {
	constructor (props) {
		super(props)
		this.state = {
			repo: 'facebook/react-native',
			username: '',
			password: '',
			errorMessage: null
		}
	}
	_go () {
		this.setState({
			errorMessage: null
		})
		Actions.commitList({
			username: this.state.username,
			password: this.state.password,
			repo: this.state.repo
		})
	}
	componentWillReceiveProps (nextProps) {
		if (nextProps.errorMessage) {
			this.setState({
				errorMessage: nextProps.errorMessage
			})
		}
	}
	render () {
		return <View style={baseStyles.container}>
			<Image source={{ uri: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png' }} style={baseStyles.logo} />
			{this.state.errorMessage &&
				<Text style={baseStyles.errorMessage}> {this.state.errorMessage} </Text>
			}
			<View style={baseStyles.textboxContainer}>
				<TextInput onChangeText={(username) => this.setState({ username })} style={baseStyles.textbox} value={this.state.username} placeholder="Username" underlineColorAndroid="transparent"/>
			</View>
			<View style={baseStyles.textboxContainer}>
				<TextInput onChangeText={(password) => this.setState({ password })} style={baseStyles.textbox} value={this.state.password} placeholder="Password" underlineColorAndroid="transparent" secureTextEntry={true}/>
			</View>
			<View style={baseStyles.textboxContainer}>
				<TextInput onChangeText={(repo) => this.setState({ repo })} style={baseStyles.textbox} value={this.state.repo} placeholder="Repo Name" underlineColorAndroid="transparent"/>
			</View>
			<TouchableOpacity onPress={this._go.bind(this)} style={baseStyles.goButton}>
					<Text style={baseStyles.goButtonText}> Go </Text>
			</TouchableOpacity>
		</View>
	}
}

module.exports = Home
