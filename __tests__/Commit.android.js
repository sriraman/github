import 'react-native'
import React from 'react'
import Commit from '../app/components/Commit'
import moment from 'moment'

import renderer from 'react-test-renderer'

/**
 * Commit Component with All Data
 */
it('render Commit component correctly', () => {
	let commitData = {
		author: {
			avatar_url: 'http://placehold.it/25/25',
			login: 'sriraman'
		},
		commit: {
			message: 'Abc',
			author: {
				date: moment()
			}
		}
	}
	let commit = renderer.create(
		<Commit data={commitData}/>
	).toJSON()
	expect(commit).toMatchSnapshot()
})

/**
 * Commit Component without Author data (Author data is optional in Github API)
 */
it('render Commit component correctly even without author data', () => {
	let commitData = {
		commit: {
			message: 'Abc',
			author: {
				date: moment()
			}
		}
	}
	let commit = renderer.create(
		<Commit data={commitData}/>
	).toJSON()
	expect(commit).toMatchSnapshot()
})
