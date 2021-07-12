import React from 'react';

import ReservationSearchFormContainer from './search/ReservationSearchFormContainer';
import SearchedTableListContainer from './list/ReservationListContainer';

const ReservationContainer = () => {
    return (
        <div>
            <ReservationSearchFormContainer />
            <SearchedTableListContainer />
        </div>
    )
}

export default ReservationContainer
