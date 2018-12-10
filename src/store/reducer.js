import { combineReducers } from 'redux-immutable';
import { reducer as FormReducer } from 'redux-form';
import { reducer as SearchReducer } from '../search/store'
const reducer = combineReducers({	
  form: FormReducer, // mounted under "form"
  search: SearchReducer,
});

export default reducer;