import React, { useEffect } from 'react';
import TableList from '../../../components/App/Table/TableList';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import * as tableActions from '../../../main/redux/actions/tableActions';

const TableListContainer = () => {

    const dispatch = useDispatch();
    const deleteTable = (id) => dispatch( tableActions.deleteTable(id) );
    const getTables = () => dispatch( tableActions.getTables() );

    const {loading, tables, error} = useSelector( state => state.tableList );


    useEffect(() => {

        getTables();

    }, [])
    

    return (
        <div>
            <TableList tables={tables} loading={loading} deleteTable={deleteTable} />
        </div>
    )
}

export default TableListContainer
