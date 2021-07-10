import React, { useMemo } from 'react'
import Table from './Table'

const ReservationList = ({ tables }) => {

    
    const tablesComponent = useMemo(()=>{

        if(getEmptyTables(tables) <= 0) { return; }

        return tables.map( table => (
            <Table 
                key={table._id}
                id={table._id}
                chairs={table.capacity}
                name={table.name}
            />
        ));

    },[tables])
    
    
    return (
        <div>
            { tablesComponent }
        </div>
    )
}

// helpers --------
function getEmptyTables(tables) {
    const tablesFiltered = tables.filter(table => table.isAvailable);
    return tablesFiltered.length;
};

export default ReservationList;
