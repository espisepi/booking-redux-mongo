import { combineReducers } from 'redux';

import { reservationReducer } from './reservationReducer';


export const rootReducer = combineReducers({
    reservation: reservationReducer
})

