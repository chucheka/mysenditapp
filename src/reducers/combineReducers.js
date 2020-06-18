import { combineReducers } from 'redux';
import parcelReducer from './parcelReducer';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
export default combineReducers({
	// parcels: parcelReducer,
	auth: authReducer
	// adminReducer: adminReducer
});
