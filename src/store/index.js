import { createStore, applyMiddleware, compose } from 'redux';
import combinedReduer from '../reducers/combineReducers';
import thunk from 'redux-thunk';
const middleware = [ thunk ];

const store = createStore(
	combinedReduer,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
export default store;
