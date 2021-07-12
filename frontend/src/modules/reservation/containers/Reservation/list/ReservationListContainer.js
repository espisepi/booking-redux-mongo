import React, { useEffect } from 'react'
import TableList from '../../../components/App/Table/TableList';

// Redux
import { useSelector } from 'react-redux';

function ReservationListContainer() {

    const tablesAvailables = useSelector( state => state.tablesAvailables.tablesAvailables );

    useEffect(()=>{
        // const getTables = async () => {
        //     const tables = await tableService.getTablesWithAvailableCheck()
        //     console.log(tables);
        // };
        // getTables();
    })

    

    return (
        <div>
            <TableList tables={tablesAvailables} />
        </div>
    )
}

export default ReservationListContainer

