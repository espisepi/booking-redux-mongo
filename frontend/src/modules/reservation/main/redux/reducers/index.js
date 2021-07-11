import { combineReducers } from 'redux';
import TablesAvailablesReducer from './tablesAvailablesReducer';

export default combineReducers({
    tablesAvailables: TablesAvailablesReducer,
});