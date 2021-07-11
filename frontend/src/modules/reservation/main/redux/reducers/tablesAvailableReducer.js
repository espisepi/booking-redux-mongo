import {
    GET_TABLES_AVAILABLES
} from '../types/types';


const initialState = {
    tablesAvailables: [],
    error: null,
    loading: false
}

export default function TablesAvailableReducer( state = initialState, action ) {
    switch(action.type) {
        case GET_TABLES_AVAILABLES:
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