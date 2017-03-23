import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import commitStyles from '../styles/commit'
import moment from 'moment'

class Commit extends Component {
	render () {
		return <View style={commitStyles.container}>
			{this.props.data.author &&
				<View style={commitStyles.authorContainer}>
					<Image source={{ uri: this.props.data.author.avatar_url }} style={commitStyles.avatar} />
					<Text style={commitStyles.authorName}>{this.props.data.author.login}</Text>
				</View>
			}
			<Text> {this.props.data.commit.message.split('\n')[0]} </Text>
			<Text style={commitStyles.timeAgo}> {moment(this.props.data.commit.author.date).fromNow()} </Text>
		</View>
	}
}

module.exports = Commit
