import React from 'react'
import PropTypes from 'prop-types'

const TableForm = ({ table, onChange, handleSubmit }) => {
    const { name, capacity } = table;
    return (
        <div>
            <input type="text" name="name" value={name} onChange={onChange} />
            <input type="number" name="capacity" value={capacity} onChange={onChange} />

            <button type="button" onClick={handleSubmit} >Crear</button>
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
    handleSubmit: PropTypes.func.isRequired
}

export default TableForm
