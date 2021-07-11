import {
    UPDATE_TABLES_AVAILABLES,

    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_LIST_FAIL,
    
    TABLE_CREATE_REQUEST,
    TABLE_CREATE_SUCCESS,
    TABLE_CREATE_FAIL,
    TABLE_CREATE_RESET,

    TABLE_UPDATE_REQUEST,
    TABLE_UPDATE_SUCCESS,
    TABLE_UPDATE_FAIL,
    TABLE_UPDATE_RESET,

    TABLE_DELETE_REQUEST,
    TABLE_DELETE_SUCCESS,
    TABLE_DELETE_FAIL,
    TABLE_DELETE_RESET,
} from '../types/types';
import * as tableService from '../../services/TableService';

// Action Creators ----------------

const updateTablesAvailables = (tablesAvailables) => {
    return {
        type: UPDATE_TABLES_AVAILABLES,
        payload: tablesAvailables
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

export function getTablesAvailablesAction(date, time) {
    return async (dispatch) => {
        try {
            const tables = await tableService.getTablesWithAvailableCheck(date, time);
            dispatch( updateTablesAvailables(tables) );
        } catch (e) {
            console.error(e);
            //dispatch( updateError(true) )
        }

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

export const updateTable = (table) => async (dispatch) => {
    try {
        dispatch(tableUpdateRequest());
        const res = await tableService.updateTable(table);
        dispatch(tableUpdateSuccess(res));
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