import React from 'react';

import ReservationSearchFormContainer from './search/ReservationSearchFormContainer';
import SearchedTableListContainer from './list/ReservationListContainer';
import ReservationFormContainer from './form/ReservationFormContainer';
import { useSelector } from 'react-redux';

const ReservationContainer = () => {

    const { reservation } = useSelector( state => state.reservationCreate );

    return (
        <div>
            <ReservationSearchFormContainer />
            <SearchedTableListContainer />
            { reservation && <ReservationFormContainer /> }
        </div>
    )
}

export default ReservationContainer
