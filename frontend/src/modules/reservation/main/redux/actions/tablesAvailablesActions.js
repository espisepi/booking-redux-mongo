import {
    UPDATE_TABLES_AVAILABLES
} from '../types/types';
import * as tableService from '../../services/TableService';

// Action Creators ----------------

const updateTablesAvailables = (tablesAvailables) => {
    return {
        type: UPDATE_TABLES_AVAILABLES,
        payload: tablesAvailables
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