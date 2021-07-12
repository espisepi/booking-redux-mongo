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

export const reservationListReducer = ( state = { reservations: [] }, action ) => {
    switch (action.type) {
        case RESERVATION_LIST_REQUEST:
          return { loading: true, reservations: [] }
        case RESERVATION_LIST_SUCCESS:
          return { loading: false, reservations: action.payload }
        case RESERVATION_LIST_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
}

export const reservationCreateReducer = ( state = {}, action ) => {
    switch (action.type) {
        case RESERVATION_CREATE_ACTIVE:
            return { reservation: action.payload }
        case RESERVATION_CREATE_REQUEST:
            return { ...state, loading: true, error: null }
        case RESERVATION_CREATE_SUCCESS:
            return { reservation: action.payload, loading: false, success: true }
        case RESERVATION_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case RESERVATION_CREATE_RESET:
            return {}
        default:
            return state;
    }
}

export const reservationUpdateReducer = ( state = { reservation: {} }, action) => {
    switch (action.type) {
        case RESERVATION_UPDATE_ACTIVE:
            return { reservation: action.payload }
        case RESERVATION_UPDATE_REQUEST:
            return { loading: true }
        case RESERVATION_UPDATE_SUCCESS:
            return { loading: false, success: true, reservation: action.payload }
        case RESERVATION_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case RESERVATION_UPDATE_RESET:
            return {}
        default:
            return state;
    }
}

export const reservationDeleteReducer = ( state = { reservation: {} }, action) => {
    switch (action.type) {
        case RESERVATION_DELETE_REQUEST:
            return { loading: true };
        case RESERVATION_DELETE_SUCCESS:
            return { loading: false, success: true }
        case RESERVATION_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}