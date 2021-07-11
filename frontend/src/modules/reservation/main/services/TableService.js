import { fetchWithoutToken } from '../../utils/fetch';
import { tablesSanitize } from '../sanitize_data/tableSanitize';

// date: Date
export const searchTables = async ( date ) => {
    try {
        console.log('search Tables api called')
        // const resFetch = await fetchWithoutToken('NOconfigNO', 'GET', date);
        // const res = await resFetch.json();
        // console.log(res);
    } catch(e) {
        // console.log(e)

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
        const res = save(table)
        return res;
    } catch (e) {
        console.error(e);
    }
}

