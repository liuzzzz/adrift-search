import React from 'react';
import {
	Provider
} from 'react-redux'
import store from './store'
import SearchWrapper from './search';

const App = () => {
	return (
		<Provider store={store}>
			<SearchWrapper/>
        </Provider>
	);
}
export default App;