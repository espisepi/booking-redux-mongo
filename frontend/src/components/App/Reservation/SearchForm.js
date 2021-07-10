import React from 'react'
import PropTypes from 'prop-types'

function SearchForm({ search, onChange, handleSearch }) {

    const { date, time, capacityMin, location } = search;

    return (
        <div>
            <input type="date" name="date" value={date} onChange={onChange} />
            <input type="number" name="capacityMin" value={capacityMin} onChange={onChange} />
            {/* <DatePicker value={date} onChange={onChange} /> */}

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

