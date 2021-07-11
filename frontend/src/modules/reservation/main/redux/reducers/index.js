import { combineReducers } from 'redux';
import TablesAvailableReducer from './tablesAvailableReducer';

export default combineReducers({
    tablesAvailable: TablesAvailableReducer,
});