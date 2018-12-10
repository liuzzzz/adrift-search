import {SHOW_ROUTINGS} from './constants'

export const showRoutings = (routings,size) => ({
	type: SHOW_ROUTINGS,
	routings,
	size

});
