/**
 * Github Sample App
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import App from './app/App'

class github extends Component {
	render () {
		return (
			<App />
		)
	}
}

AppRegistry.registerComponent('github', () => github)
