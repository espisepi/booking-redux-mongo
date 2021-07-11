import React, { useState, useEffect } from 'react'
import * as tableService from '../../../main/services/TableService';
import TableList from '../../../components/App/Table/TableList';

// Redux
import { useDispatch } from 'react-redux';
import * as tableActions from '../../../main/redux/actions/tableActions';

const TableListContainer = () => {

    const dispatch = useDispatch();
    const deleteTable = (id) => dispatch( tableActions.deleteTable(id) ); 

    const [ tables, setTables ] = useState();


    useEffect(() => {

        const getConfig = async () => {
            const tables = await tableService.getTables();
            
            if(tables) {
                setTables(tables);
            }
        }

        getConfig();

    }, [tables])

    // console.log(tables)  Se renderiza infinito


    return (
        <div>
            <TableList tables={tables} deleteTable={deleteTable} />
        </div>
    )
}

export default TableListContainer
