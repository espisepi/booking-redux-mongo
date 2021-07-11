import { formatDateTime } from '../../utils/dateUtils';
import { fetchWithoutToken } from '../../utils/fetch';
import { tablesSanitize, tablesWithReservationSanitize } from '../sanitize_data/tableSanitize';


/**
 * @param {Date} date
 */
export const getReservations = async (date, time) => {
    try {
        const dateTime = formatDateTime(date, time);
        const resFetch = await fetchWithoutToken(`reservations?date=${dateTime}`, 'GET' );
        const res = await resFetch.json();
        return res;
    } catch (e) {
        console.error(e);
    }
}

/**
 * @param {Date} date
 */
export const getTablesWithAvailableCheck = async (date, time) => {
    try {
        const tables = await getTables();
        const reservations = await getReservations(date, time);
        const tablesSanitize = tablesWithReservationSanitize(tables, reservations);
        return tablesSanitize;
    } catch (e) {
        console.error(e);
    }
}

export const getById = async ( id ) => {
    try {
        const resFetch = await fetchWithoutToken(`tables/${id}`, 'GET' );
        const res = await resFetch.json();
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const getTables = async () => {
    try {
        const resFetch = await fetchWithoutToken('tables');
        const res = await resFetch.json();
        const resSanitized = tablesSanitize( res );
        return resSanitized;
    } catch (e) {
        console.error(e);
    }
}

export const createTable = async ( table ) => {
    try {
        const res = await save(table)
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const updateTable = async (table) => {
    try {
        const resFetch = await fetchWithoutToken(`tables/${table.id}`, 'PUT', table );
        const res = await resFetch.json();
        const resSanitized = tablesSanitize(res);
        return resSanitized;
    } catch (e) {
        console.error(e);
    }
}

export const save = async ( table ) => {
    try {
        const resFetch = await fetchWithoutToken(`tables`, 'POST', table );
        const res = await resFetch.json();
        const resSanitized = tablesSanitize( res );
        return resSanitized;
    } catch (e) {
        console.error(e);
    }
}
