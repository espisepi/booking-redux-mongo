import React, { useEffect, useState } from 'react'
import SearchForm from '../../../components/App/Reservation/SearchForm';
import { formatDate } from '../../../utils/dateUtils';
// import * as tableService from '../../../main/services/TableService';

// Redux
import * as tableActions from '../../../main/redux/actions/tableActions';
import { useDispatch } from 'react-redux';


const ReservationSearchFormContainer = () => {

    const dispatch = useDispatch();
    const getTablesWithAvailableCheck = (date, time) => dispatch( tableActions.getTablesAvailablesAction(date, time) ); 

    const [search, setSearch] = useState({
        date: formatDate(new Date()),
        time: '10:00',
        capacityMin: '1',
        location: '',
        tables: []
    });

    useEffect(()=>{
        const { date, time } = search;
        getTablesWithAvailableCheck(date, time);
    },[]);

    const onChange = (e) => {
        // console.log(`name: ${e.target.name} ||| value: ${e.target.value}`)
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const { date, time } = search;
        getTablesWithAvailableCheck(date, time);
    }

    return (
        <div>
            <SearchForm search={search} onChange={onChange} handleSearch={handleSearch} />
        </div>
    )
}

export default ReservationSearchFormContainer
