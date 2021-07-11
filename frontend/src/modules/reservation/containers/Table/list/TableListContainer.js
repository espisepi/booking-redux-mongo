import React, { useEffect } from 'react';
import TableList from '../../../components/App/Table/TableList';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import * as tableActions from '../../../main/redux/actions/tableActions';

const TableListContainer = () => {

    const dispatch = useDispatch();
    const deleteTable = (id) => dispatch( tableActions.deleteTable(id) );
    const getTables = () => dispatch( tableActions.getTables() );

    const {loading, tables} = useSelector( state => state.tableList );


    useEffect(() => {

        getTables();
        
    }, [])

    // console.log(tables)  Se renderiza infinito


    return (
        <div>
            <TableList tables={tables} deleteTable={deleteTable} />
        </div>
    )
}

export default TableListContainer
