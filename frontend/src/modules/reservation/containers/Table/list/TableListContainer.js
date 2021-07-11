import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as tableService from '../../../main/services/TableService';
import TableList from '../../../components/App/Table/TableList';

const TableListContainer = props => {

    const [ tables, setTables ] = useState();

    useEffect(() => {

        const getConfig = async () => {
            const tables = await tableService.getTables();
            console.log(tables)
            if(tables) {
                setTables(tables);
            }
        }

        getConfig();

    }, [])

    return (
        <div>
            <TableList tables={tables} />
        </div>
    )
}

TableListContainer.propTypes = {

}

export default TableListContainer
