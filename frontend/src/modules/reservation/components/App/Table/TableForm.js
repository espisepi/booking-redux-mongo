import React from 'react'
import PropTypes from 'prop-types'

const TableForm = ({ table, onChange, handleSubmit, editMode }) => {
    const { name, capacity } = table;
    return (
        <div>
            <input type="text" name="name" value={name} onChange={onChange} />
            <input type="number" name="capacity" value={capacity} onChange={onChange} />

            <button type="button" onClick={handleSubmit} >{ editMode ? (<span>edit</span>) : (<span>create</span>) }</button>
        </div>
    )
}

TableForm.propTypes = {
    table: PropTypes.shape({
        name: PropTypes.string.isRequired,
        capacity: PropTypes.string.isRequired,
        isAvailable: PropTypes.string,
        location: PropTypes.string
    }),
    onChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    editMode: PropTypes.bool
}

export default TableForm
