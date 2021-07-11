import React, { useEffect } from 'react'
import * as tableService from '../../../main/services/TableService';

function SearchedTableListContainer() {

    useEffect(()=>{
        const getTables = async () => {
            const tables = await tableService.getTablesWithAvailableCheck()
            console.log(tables);
        };
        getTables();
    })

    return (
        <div>
            
        </div>
    )
}

export default SearchedTableListContainer

