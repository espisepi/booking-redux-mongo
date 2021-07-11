import {
    UPDATE_TABLES_AVAILABLES,

    TABLE_CREATE_REQUEST,
    TABLE_CREATE_SUCCESS,
    TABLE_CREATE_FAIL,
    TABLE_CREATE_RESET,

    TABLE_UPDATE_REQUEST,
    TABLE_UPDATE_SUCCESS,
    TABLE_UPDATE_FAIL,
    TABLE_UPDATE_RESET
} from '../types/types';


const initialState = {
    tablesAvailables: [],
    error: null,
    loading: false
}

export function TablesAvailablesReducer( state = initialState, action ) {
    switch(action.type) {
        case UPDATE_TABLES_AVAILABLES:
            return {
                ...state,
                tablesAvailables: action.payload,
                error: null,
                loading: false
            }
        default:
            return state;
    }
}

export const tableCreateReducer = ( state = {}, action) => {
    switch (action.type) {
        case TABLE_CREATE_REQUEST:
            return { loading: true };
        case TABLE_CREATE_SUCCESS:
            return { loading: false, success: true, table: action.payload }
        case TABLE_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case TABLE_CREATE_RESET:
            return {}
        default:
            return state;
    }
}

export const tableUpdateReducer = ( state = { table: {} }, action) => {
    switch (action.type) {
        case TABLE_UPDATE_REQUEST:
            return { loading: true };
        case TABLE_UPDATE_SUCCESS:
            return { loading: false, success: true, table: action.payload }
        case TABLE_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case TABLE_UPDATE_RESET:
            return {}
        default:
            return state;
    }
}