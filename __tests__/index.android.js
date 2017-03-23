import 'react-native'
import React from 'react'
import Home from '../app/containers/Home'

import renderer from 'react-test-renderer'

/**
 * To Mock the native module
 */
jest.mock('Linking', () => {
	return {
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		openURL: jest.fn(),
		canOpenURL: jest.fn(),
		getInitialURL: jest.fn()
	}
})

/**
 * Home Page
 */
it('renders correctly', () => {
	const tree = renderer.create(
		<Home />
	).toJSON()
	expect(tree).toMatchSnapshot()
})
