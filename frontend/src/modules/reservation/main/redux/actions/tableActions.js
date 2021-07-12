import {
    // UPDATE_TABLES_AVAILABLES,

    TABLE_AVAILABLES_REQUEST,
    TABLE_AVAILABLES_SUCCESS,
    TABLE_AVAILABLES_FAIL,

    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_LIST_FAIL,
    
    TABLE_CREATE_REQUEST,
    TABLE_CREATE_SUCCESS,
    TABLE_CREATE_FAIL,

    TABLE_UPDATE_ACTIVE,
    TABLE_UPDATE_REQUEST,
    TABLE_UPDATE_SUCCESS,
    TABLE_UPDATE_FAIL,
    TABLE_UPDATE_RESET,

    TABLE_DELETE_REQUEST,
    TABLE_DELETE_SUCCESS,
    TABLE_DELETE_FAIL
} from '../types/types';
import * as tableService from '../../services/TableService';

// Action Creators ----------------

// const updateTablesAvailables = (tablesAvailables) => {
//     return {
//         type: UPDATE_TABLES_AVAILABLES,
//         payload: tablesAvailables
//     }
// }

const tableAvailablesRequest = () => {
    return {
        type: TABLE_AVAILABLES_REQUEST
    }
}
const tableAvailablesSuccess = (tables) => {
    return {
        type: TABLE_AVAILABLES_SUCCESS,
        payload: tables
    }
}
const tableAvailablesFail = (error) => {
    return {
        type: TABLE_AVAILABLES_FAIL,
        payload: error
    }
}

const tableListRequest = () => {
    return {
        type: TABLE_LIST_REQUEST
    }
}
const tableListSuccess = (tables) => {
    return {
        type: TABLE_LIST_SUCCESS,
        payload: tables
    }
}
const tableListFail = (error) => {
    return {
        type: TABLE_LIST_FAIL,
        payload: error
    }
}

const tableCreateRequest = () => {
    return {
        type: TABLE_CREATE_REQUEST
    }
}
const tableCreateSuccess = (table) => {
    return {
        type: TABLE_CREATE_SUCCESS,
        payload: table
    }
}
const tableCreateFail = (error) => {
    return {
        type: TABLE_CREATE_FAIL,
        payload: error
    }
}

const tableUpdateActive = (table) => {
    return {
        type: TABLE_UPDATE_ACTIVE,
        payload: table
    }
}

const tableUpdateRequest = () => {
    return {
        type: TABLE_UPDATE_REQUEST
    }
}
const tableUpdateSuccess = (table) => {
    return {
        type: TABLE_UPDATE_SUCCESS,
        payload: table
    }
}
const tableUpdateFail = (error) => {
    return {
        type: TABLE_UPDATE_FAIL,
        payload: error
    }
}
const tableUpdateReset = () => {
    return {
        type: TABLE_UPDATE_RESET
    }
}

const tableDeleteRequest = () => {
    return {
        type: TABLE_DELETE_REQUEST
    }
}
const tableDeleteSuccess = () => {
    return {
        type: TABLE_DELETE_SUCCESS
    }
}
const tableDeleteFail = (error) => {
    return {
        type: TABLE_DELETE_FAIL,
        payload: error
    }
}


// Side effects --------------

export const getTablesAvailablesAction = (date, time) => async (dispatch) => {
    try {
        dispatch(tableAvailablesRequest());
        const tables = await tableService.getTablesWithAvailableCheck(date, time);
        dispatch(tableAvailablesSuccess(tables));
    } catch (e) {
        console.error(e);
        dispatch(tableAvailablesFail(e));
    }
} 

export const getTables = () => async (dispatch) => {
    try {
        dispatch(tableListRequest());
        const res = await tableService.getTables();
        dispatch(tableListSuccess(res));
    } catch (e) {
        console.error(e);
        dispatch(tableListFail(e));
    }
}

export const createTable = (table) => async (dispatch) => {
    try {
        dispatch(tableCreateRequest());
        const res = await tableService.createTable(table);
        dispatch(tableCreateSuccess(res));
        dispatch(getTables()) // update tables list
    } catch (e) {
        console.error(e);
        dispatch(tableCreateFail(`error in createTable action: ${e}`));
    }
}

export const activeTable = (table) => async (dispatch) => {
    try {
        dispatch(tableUpdateActive(table));
    } catch (e) {
        console.error(e);
        dispatch(tableUpdateFail(e));
    }
}

export const updateTable = (table) => async (dispatch) => {
    try {
        dispatch(tableUpdateRequest());
        const res = await tableService.updateTable(table);
        dispatch(tableUpdateSuccess(res));
        dispatch(tableUpdateReset()); // reset table update
        dispatch(getTables()) // update tables list
    } catch (e) {
        console.error(e);
        dispatch(tableUpdateFail(`error in updateTable action: ${e}`));
    }
}

export const deleteTable = (id) => async (dispatch) => {
    try {
        dispatch(tableDeleteRequest());
        await tableService.deleteTable(id);
        dispatch(tableDeleteSuccess());
        dispatch(getTables()) // update tables list
    } catch (e) {
        console.error(e);
        dispatch(tableDeleteFail(`error in updateTable action: ${e}`));
    }
}