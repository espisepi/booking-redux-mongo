import React, { useEffect } from 'react'
import TableList from '../../../components/App/Table/TableList';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { activeCreateReservation } from '../../../main/redux/actions/reservationActions';

function ReservationListContainer() {

    const tablesAvailables = useSelector( state => state.tableAvailables.tables );

    const dispatch = useDispatch();
    const makeReservation = (idTable) => dispatch( activeCreateReservation(idTable) );

    useEffect(()=>{
        // const getTables = async () => {
        //     const tables = await tableService.getTablesWithAvailableCheck()
        //     console.log(tables);
        // };
        // getTables();
    })



    return (
        <div>
            <TableList tables={tablesAvailables} makeReservation={makeReservation} />
        </div>
    )
}

export default ReservationListContainer

