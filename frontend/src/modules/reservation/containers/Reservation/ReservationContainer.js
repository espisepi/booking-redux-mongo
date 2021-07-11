import React from 'react';

import SearchFormContainer from './form/SearchFormContainer';
import SearchedTableListContainer from './list/SearchedTableListContainer';

const ReservationContainer = () => {
    return (
        <div>
            <SearchFormContainer />
            <SearchedTableListContainer />
        </div>
    )
}

export default ReservationContainer
