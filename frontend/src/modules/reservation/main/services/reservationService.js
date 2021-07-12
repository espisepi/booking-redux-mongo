import { formatDateTime } from '../../utils/dateUtils';
import { fetchWithoutToken } from '../../utils/fetch';


// export const getTables = async () => {
//     try {
//         const resFetch = await fetchWithoutToken('tables');
//         const res = await resFetch.json();
//         const resSanitized = tablesSanitize( res );
//         return resSanitized;
//     } catch (e) {
//         console.error(e);
//     }
// }

export const createReservation = async ( reservation, tableId ) => {
    try {
        reservation.table = tableId;
        const res = await save(reservation)
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const updateReservation = async (reservation) => {
    try {
        const resFetch = await fetchWithoutToken(`reservations/${reservation.id}`, 'PUT', reservation );
        const res = await resFetch.json();
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const save = async ( reservation ) => {
    try {
        const resFetch = await fetchWithoutToken(`reservations`, 'POST', reservation );
        const res = await resFetch.json();
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const deleteTable = async ( id ) => {
    try {
        await fetchWithoutToken(`reservations/${id}`, 'DELETE' );
        // const resFetch = await fetchWithoutToken(`reservations/${id}`, 'DELETE' );
        // const res = await resFetch.json();
        // console.log(res); // {}
    } catch (e) {
        console.error(e);
    }
}
