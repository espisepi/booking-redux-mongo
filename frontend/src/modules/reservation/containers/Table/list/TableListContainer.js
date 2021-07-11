import React, { useEffect } from 'react';
import TableList from '../../../components/App/Table/TableList';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import * as tableActions from '../../../main/redux/actions/tableActions';

const TableListContainer = () => {

    const dispatch = useDispatch();

    const editTable = (table) => dispatch( tableActions.activeTable(table) );

    const deleteTable = (id) => dispatch( tableActions.deleteTable(id) );

    const listTables = () => dispatch( tableActions.getTables() );

    const {loading, tables, error} = useSelector( state => state.tableList );


    useEffect(() => {

        listTables();

    }, [])
    

    return (
        <div>
            <TableList tables={tables} loading={loading} error={error} deleteTable={deleteTable} editTable={editTable} />
        </div>
    )
}

export default TableListContainer
