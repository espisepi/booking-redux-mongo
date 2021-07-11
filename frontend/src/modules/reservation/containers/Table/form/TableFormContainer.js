import React, { useState } from 'react'
import * as tableService from '../../../main/services/TableService';

const TableFormContainer = () => {

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
        tableService.createTable(table);
    }

    const { name, capacity } = form;

    return (
        <div>
            <input type="text" name="name" value={name} onChange={onChange} />
            <input type="number" name="capacity" value={capacity} onChange={onChange} />

            <button type="button" onClick={handleSubmit} >Crear</button>
        </div>
    )
}

export default TableFormContainer
