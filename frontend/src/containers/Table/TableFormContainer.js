import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { createTable } from '../../main/api/fetch/apiAdminConfig';

const TableFormContainer = ({}) => {

    const [ form, setForm ] = useState({
        name: '',
        capacity: '4',
        isAvailable: 'false',
        location: ''
    });

    const onChange = (e) => {
        // console.log(`name: ${e.target.name} ||| value: ${e.target.value}`)
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = (e) => {
        const table = {
            ...form
        };
        createTable(table);
    }

    const { name, capacity, isAvailable, location } = form;

    return (
        <div>
            <input type="text" name="name" value={name} onChange={onChange} />
            <input type="number" name="capacity" value={capacity} onChange={onChange} />

            <button type="button" onClick={handleSubmit} >Crear</button>
        </div>
    )
}

TableFormContainer.propTypes = {

}

export default TableFormContainer
