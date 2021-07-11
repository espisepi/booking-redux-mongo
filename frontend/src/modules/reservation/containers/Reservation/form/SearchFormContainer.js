import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchForm from '../../../components/App/Reservation/SearchForm';
import { formatDate } from '../../../utils/dateUtils';
import { searchTables } from '../../../main/services/TableService';

const SearchFormContainer = ({}) => {

    const [search, setSearch] = useState({
        date: formatDate(new Date()),
        time: '',
        capacityMin: '1',
        location: '',
        tables: []
    });

    const onChange = (e) => {
        console.log(`name: ${e.target.name} ||| value: ${e.target.value}`)
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('boton pulsado!');

        const { date } = search;

        searchTables(date)
    }

    return (
        <div>
            <SearchForm search={search} onChange={onChange} handleSearch={handleSearch} />
        </div>
    )
}

SearchFormContainer.propTypes = {

}

export default SearchFormContainer
