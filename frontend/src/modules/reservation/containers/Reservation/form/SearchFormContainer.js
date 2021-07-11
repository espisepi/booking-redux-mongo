import React, { useState } from 'react'
import SearchForm from '../../../components/App/Reservation/SearchForm';
import { formatDate } from '../../../utils/dateUtils';
import * as tableService from '../../../main/services/TableService';

const SearchFormContainer = () => {

    const [search, setSearch] = useState({
        date: formatDate(new Date()),
        time: '10:00',
        capacityMin: '1',
        location: '',
        tables: []
    });

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

        const searchTables = async () => {
            const tables = await tableService.getTablesWithAvailableCheck(date, time)
            console.log(tables);
        }

        searchTables(date)
    }

    return (
        <div>
            <SearchForm search={search} onChange={onChange} handleSearch={handleSearch} />
        </div>
    )
}

export default SearchFormContainer
