import { fromJS } from 'immutable';
import { SHOW_ROUTINGS,CLEAR_ROUTINGS } from './constants'; 
const defaultState = fromJS({
	routings:[],
	size: 0,
})

export default (state = defaultState, action) => {
	if (SHOW_ROUTINGS === action.type) {
		return state.set('routings',state.get('routings').merge(action.routings));
	}
	if(CLEAR_ROUTINGS === action.type){
		return state.set('routings',fromJS([])).set('size',0);
	}
	return state;
}