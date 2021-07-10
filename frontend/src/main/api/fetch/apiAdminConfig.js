import { fetchWithoutToken } from './fetch';

export const findOne = async () => {
    try {
        const resFetch = await fetchWithoutToken('config', 'GET');
        const res = await resFetch.json();
        return res;
    } catch (e) {
        console.log(e)
    }
}

export const save = async (config) => {
    try {
        const resFetch = await fetchWithoutToken('config', 'POST', config);
        const res = await resFetch.json();
        return res
    } catch (e) {
        console.log(e);
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
