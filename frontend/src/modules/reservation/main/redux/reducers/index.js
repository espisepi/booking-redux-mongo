import { combineReducers } from 'redux';
import {TableAvailablesReducer, tableCreateReducer, tableUpdateReducer, tableDeleteReducer, tableListReducer} from './tableReducers';

export default combineReducers({
    tableAvailables: TableAvailablesReducer,
    tableList: tableListReducer,
    tableCreate: tableCreateReducer,
    tableUpdate: tableUpdateReducer,
    tableDelete: tableDeleteReducer
});