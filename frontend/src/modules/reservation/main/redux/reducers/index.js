import { combineReducers } from 'redux';
import {TablesAvailablesReducer, tableCreateReducer, tableUpdateReducer, tableDeleteReducer, tableListReducer} from './tableReducers';

export default combineReducers({
    tablesAvailables: TablesAvailablesReducer,
    tableList: tableListReducer,
    tableCreate: tableCreateReducer,
    tableUpdate: tableUpdateReducer,
    tableDelete: tableDeleteReducer
});