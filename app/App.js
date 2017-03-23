import { Scene, Router } from 'react-native-router-flux'
import React, { Component } from 'react'
import Home from './containers/Home'
import CommitList from './containers/CommitList'

class App extends Component {
	render () {
		console.disableYellowBox = true
		return <Router>
			<Scene key="root">
				<Scene key="home" component={Home} title="Home" hideNavBar={true}/>
				<Scene key="commitList" component={CommitList} title="Commit List" hideNavBar={false}/>
			</Scene>
		</Router>
	}
}

module.exports = App
