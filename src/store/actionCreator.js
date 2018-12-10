import * as constants from './constants'

export const readInputAction = (name, value) => ({
	type: constants.READ_INPUT,
	name: name,
	value: value
})