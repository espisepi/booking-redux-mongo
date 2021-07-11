import { combineReducers } from 'redux';
import {TablesAvailablesReducer, tableCreateReducer, tableUpdateReducer} from './tablesAvailablesReducer';

export default combineReducers({
    tablesAvailables: TablesAvailablesReducer,
    tableCreate: tableCreateReducer,
    tableUpdate: tableUpdateReducer
});