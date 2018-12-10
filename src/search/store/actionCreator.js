import {SHOW_ROUTINGS,CLEAR_ROUTINGS} from './constants'

export const showRoutings = (routings,size) => ({
	type: SHOW_ROUTINGS,
	routings

});
export const clearRoutings = ()=>({
	type: CLEAR_ROUTINGS
});
