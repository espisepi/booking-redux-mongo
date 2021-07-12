import { combineReducers } from 'redux';
import {TableAvailablesReducer, tableListReducer, tableCreateReducer, tableUpdateReducer, tableDeleteReducer} from './tableReducers';
import { reservationListReducer, reservationCreateReducer, reservationUpdateReducer, reservationDeleteReducer } from './reservationReducers';
export default combineReducers({
    tableAvailables: TableAvailablesReducer,
    tableList: tableListReducer,
    tableCreate: tableCreateReducer,
    tableUpdate: tableUpdateReducer,
    tableDelete: tableDeleteReducer,

    reservationList: reservationListReducer,
    reservationCreate: reservationCreateReducer,
    reservationUpdate: reservationUpdateReducer,
    reservationDelete: reservationDeleteReducer,
});