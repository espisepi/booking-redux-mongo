import { fetchWithoutToken } from '../../utils/fetch';

// date: Date
export const searchTables = async ({ date }) => {
    try {
        console.log('search Tables api called')
        // const resFetch = await fetchWithoutToken('NOconfigNO', 'GET', date);
        // const res = await resFetch.json();
        // console.log(res);
    } catch(e) {
        // console.log(e)

    }
}

export const getById = async ({ id }) => {
    try {
        const resFetch = await fetchWithoutToken(`tables/${id}`, 'GET' );
        const res = await resFetch.json();
        return res;
    } catch (e) {
        console.error(e);
    }
}

