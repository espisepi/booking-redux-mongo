import { fetchWithoutToken } from './fetch';

// date: Date
export const searchTables = async ({ date }) => {
    try {
        const resFetch = await fetchWithoutToken('availability', 'POST', date);
        console.log(resFetch)
    } catch(e) {
        console.log(e)

    }
}



