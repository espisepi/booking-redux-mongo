import { fetchWithoutToken } from '../../utils/fetch';
import { findById } from './TableService';
import { tablesSanitize } from '../sanitize_data/tableSanitize';

export const findOne = async () => {
    try {
        const resFetch = await fetchWithoutToken('config', 'GET');
        const res = await resFetch.json();
        return res;
    } catch (e) {
        console.error(e)
    }
}

export const getTablesDefault = async () => {
    try {

        const config = await findOne();
        const defaultTables = config.defaultTables;

        // https://stackoverflow.com/questions/40140149/use-async-await-with-array-map
        const res = await Promise.all(
            defaultTables.map( async id => {
                const table = await findById(id);
                return table;
            })
        );

        // Sanitize data
        const resSanitized = tablesSanitize( res );
        

        return resSanitized;
    } catch (e) {
        console.error(e);
    }
}

export const save = async (config) => {
    try {
        const resFetch = await fetchWithoutToken('config', 'POST', config);
        const res = await resFetch.json();
        return res
    } catch (e) {
        console.error(e);
    }
}

export const createTable = async (table) => {
    try {
        const config = await findOne();
        config.tablesDefault.push(table);
        const res = await save(config);
        return res;
    } catch (e) {
        console.log(e);
    }
}
