import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchForm from '../../components/App/Reservation/SearchForm';
import { formatDate } from '../../helpers/dateHelper';

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
        console.log('boton pulsado!');
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
