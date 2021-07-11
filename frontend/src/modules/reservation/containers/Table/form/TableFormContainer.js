import React, { useState } from 'react'
import TableForm from '../../../components/App/Table/TableForm';

// Redux
import { useDispatch } from 'react-redux';
import * as tableActions from '../../../main/redux/actions/tableActions';


const TableFormContainer = () => {

    const dispatch = useDispatch();
    const createTable = (table) => dispatch( tableActions.createTable(table) ); 
    const updateTable = (table) => dispatch( tableActions.updateTable(table) );
    

    const [ form, setForm ] = useState({
        name: '',
        capacity: '4',
        isAvailable: 'false',
        location: ''
    });

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = (e) => {
        const table = {
            ...form
        };

        if(table.id){
            updateTable(table);
        } else {
            createTable(table);
        }
    }

    return (
        <TableForm table={form} onChange={onChange} handleSubmit={handleSubmit} />
    )
}

export default TableFormContainer
