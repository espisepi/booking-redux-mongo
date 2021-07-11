import React from 'react';
import PropTypes from 'prop-types';

import SearchFormContainer from './form/SearchFormContainer';
import SearchedTableListContainer from './list/SearchedTableListContainer';

const ReservationContainer = props => {
    return (
        <div>
            <SearchFormContainer />
            <SearchedTableListContainer />
        </div>
    )
}

ReservationContainer.propTypes = {

}

export default ReservationContainer
