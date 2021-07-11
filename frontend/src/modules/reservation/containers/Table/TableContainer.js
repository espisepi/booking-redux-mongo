import React from 'react';
import PropTypes from 'prop-types';
import TableListContainer from './list/TableListContainer';
import TableFormContainer from './form/TableFormContainer';

const TableContainer = props => {
    return (
        <div>
            <TableListContainer />
            <TableFormContainer />
        </div>
    )
}

TableContainer.propTypes = {

}

export default TableContainer
