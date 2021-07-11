import React from 'react'
import PropTypes from 'prop-types'

function SearchForm({ search, onChange, handleSearch }) {

    const { date, time, capacityMin, location } = search;

    return (
        <div>
            
            <input type="date" name="date" value={date} onChange={onChange} />
            <input type="number" name="capacityMin" value={capacityMin} onChange={onChange} />
            <select name="time" onChange={onChange} value={time}>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
            </select>
            <select name="location" onChange={onChange} value={location}>
                <option value="">Any Location</option>
                <option value="outside">Outside</option>
                <option value="inside">Inside</option>
            </select>

            <button type="button" onClick={handleSearch}> Search </button>

        </div>
    )
}

SearchForm.propTypes = {
    search: PropTypes.shape({
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        capacityMin: PropTypes.string,
        location: PropTypes.string,
    }),
    onChange: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default SearchForm

