import { fromJS } from 'immutable';
import { SHOW_ROUTINGS } from './constants'; 
const defaultState = fromJS({
	routings:[],
	size: 0,
})

export default (state = defaultState, action) => {
	if (SHOW_ROUTINGS === action.type) {
		return state.set('routings',state.get('routings').merge(action.routings)).set('size',state.get('size')+action.size);
	}
	return state;
}