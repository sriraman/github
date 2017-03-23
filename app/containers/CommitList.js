import React, { Component } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import baseStyles from '../styles/base'
import Commit from '../components/Commit'
import GiftedListView from 'react-native-gifted-listview'
import base64 from 'base-64'
import { Actions } from 'react-native-router-flux'

class CommitList extends Component {
	constructor (props) {
		super(props)
		this.state = {
			repo: this.props.repo,
			username: this.props.username,
			password: this.props.password,
			avatar: null,
			authenticated: false
		}
	}
	componentDidMount () {
		fetch('https://api.github.com/user', {
			method: 'GET',
			headers: {
				'Authorization': 'Basic ' + base64.encode(this.state.username + ':' + this.state.password)
			}
		}).then((res) => res.json())
		.then((res) => {
			console.log(res)
			if (res.login) {
				this.setState({
					avatar: res.avatar_url,
					authenticated: true
				})
			} else {
				Actions.pop({
					refresh: {
						errorMessage: 'Invalid Credential'
					}
				})
			}
		})
	}
	_onFetch (page = 1, callback, options) {
		fetch('https://api.github.com/repos/' + this.state.repo + '/commits?page=' + page, {
			method: 'GET',
			headers: {
				'Authorization': 'Basic ' + base64.encode(this.state.username + ':' + this.state.password)
			}
		}).then((res) => res.json())
			.then((res) => {
				console.log(res)
				if (res.message) {
					Actions.pop({
						refresh: {
							errorMessage: 'Repository Not Found'
						}
					})
				} else {
					if (res.length === 30) {
						callback(res)
					} else {
						callback(res, {
							allLoaded: true
						})
					}
				}
			})
	}
	_renderRowView (row) {
		console.log(row)
		return <Commit data={row} />
	}
	render () {
		return <View style={baseStyles.whiteContainerWithHeader}>
			{ this.state.authenticated &&
				<View style={baseStyles.welcomeContainer}>
					<Image source={{ uri: this.state.avatar }} style={baseStyles.avatar} />
					<Text style={baseStyles.username}> Hi {this.state.username},</Text>
				</View>
			}
			<GiftedListView
				ref="listview"
				renderRow = {this._renderRowView.bind(this)}
				onFetch = {this._onFetch.bind(this)}
				firstLoader = {true}
				enableEmptySections = {true}
			/>
		</View>
	}
}

module.exports = CommitList
