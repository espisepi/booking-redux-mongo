import {
    RESERVATION_LIST_REQUEST,
    RESERVATION_LIST_SUCCESS,
    RESERVATION_LIST_FAIL,

    RESERVATION_CREATE_ACTIVE,
    RESERVATION_CREATE_REQUEST,
    RESERVATION_CREATE_SUCCESS,
    RESERVATION_CREATE_FAIL,
    RESERVATION_CREATE_RESET,

    RESERVATION_UPDATE_REQUEST,
    RESERVATION_UPDATE_SUCCESS,
    RESERVATION_UPDATE_FAIL,
    RESERVATION_UPDATE_RESET,

    RESERVATION_DELETE_REQUEST,
    RESERVATION_DELETE_SUCCESS,
    RESERVATION_DELETE_FAIL,
    RESERVATION_UPDATE_ACTIVE
} from '../types/types';

import * as reservationService from '../../services/reservationService';


// Action Creators --------------------------

const reservationListRequest = () => {
    return {
        type: RESERVATION_LIST_REQUEST
    }
}

const reservationListSuccess = (reservations) => {
    return {
        type: RESERVATION_LIST_SUCCESS,
        payload: reservations
    }
}
const reservationListFail = (error) => {
    return {
        type: RESERVATION_LIST_FAIL,
        payload: error
    }
}

const reservationCreateActive = (reservation) => {
    return {
        type: RESERVATION_CREATE_ACTIVE,
        payload: reservation
    }
}

const reservationCreateReset = () => {
    return {
        type: RESERVATION_CREATE_RESET
    }
}

const reservationCreateRequest = () => {
    return {
        type: RESERVATION_CREATE_REQUEST
    }
}
const reservationCreateSuccess = (reservation) => {
    return {
        type: RESERVATION_CREATE_SUCCESS,
        payload: reservation
    }
}
const reservationCreateFail = (error) => {
    return {
        type: RESERVATION_CREATE_FAIL,
        payload: error
    }
}

const reservationUpdateActive = (reservation) => {
    return {
        type: RESERVATION_UPDATE_ACTIVE,
        payload: reservation
    }
}

const reservationUpdateRequest = () => {
    return {
        type: RESERVATION_UPDATE_REQUEST
    }
}
const reservationUpdateSuccess = (reservation) => {
    return {
        type: RESERVATION_UPDATE_SUCCESS,
        payload: reservation
    }
}
const reservationUpdateFail = (error) => {
    return {
        type: RESERVATION_UPDATE_FAIL,
        payload: error
    }
}
const reservationUpdateReset = () => {
    return {
        type: RESERVATION_UPDATE_RESET
    }
}

const reservationDeleteRequest = () => {
    return {
        type: RESERVATION_DELETE_REQUEST
    }
}
const reservationDeleteSuccess = () => {
    return {
        type: RESERVATION_DELETE_SUCCESS
    }
}
const reservationDeleteFail = (error) => {
    return {
        type: RESERVATION_DELETE_FAIL,
        payload: error
    }
}


// Side Effects -----------------------------

// export const listReservations = () => async (dispatch) => {
//     try {
//         dispatch(reservationListRequest());
//         const res = await tableService.getTables();
//         dispatch(tableListSuccess(res));
//     } catch (e) {
//         console.error(e);
//         dispatch(tableListFail(e));
//     }
// }

export const activeCreateReservation = (tableId) => async (dispatch) => {
    try {
        const reservation = {
            table: tableId,
            name: 'ff',
            phone: '',
            email: '',
        }
        dispatch(reservationCreateActive(reservation));
    } catch (e) {
        console.error(e);
        dispatch(reservationUpdateFail(e));
    }
}

export const resetCreateReservation = () => async (dispatch) => {
    try{
        dispatch(reservationCreateReset());
    } catch (e) {
        console.error(e);
        dispatch(reservationCreateFail(e));
    }
}

export const createReservation = (reservation) => async (dispatch, getState) => {
    try {
        dispatch(reservationCreateRequest());
        const { tableId } = getState().reservationCreate.tableId;
        const res = await reservationService.createReservation(reservation, tableId);
        dispatch(reservationCreateSuccess(res));
    } catch (e) {
        console.error(e);
        dispatch(reservationCreateFail(e));
    }
}

export const activeReservation = (reservation) => async (dispatch) => {
    try {
        dispatch(reservationUpdateActive(reservation));
    } catch (e) {
        console.error(e);
        dispatch(reservationUpdateFail(e));
    }
}

export const updateReservation = (reservation) => async (dispatch) => {
    try {
        dispatch(reservationUpdateRequest());
        const res = await reservationService.updateReservation(reservation);
        dispatch(reservationUpdateSuccess(res));
        dispatch(reservationUpdateReset()); // reset reservation update
    } catch (e) {
        console.error(e);
        dispatch(reservationUpdateFail(e));
    }
}

export const deleteReservation = (id) => async (dispatch) => {
    try {
        dispatch(reservationDeleteRequest());
        await reservationService.deleteTable(id);
        dispatch(reservationDeleteSuccess());
    } catch (e) {
        console.error(e);
        dispatch(reservationDeleteFail(`error in updateTable action: ${e}`));
    }
}