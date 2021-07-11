import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {findOne, createTable} from '../../main/services/ConfigService';
import TableList from '../../components/App/Table/TableList';

const TableListContainer = props => {

    const [ tables, setTables ] = useState();
    useEffect(() => {
        const getConfig = async () => {
            const config = await findOne();
            console.log(config);
            if(config?.tablesDefault) {
                setTables(config.tablesDefault);
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
