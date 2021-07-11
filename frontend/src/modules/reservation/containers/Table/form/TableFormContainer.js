import React, { useState, useEffect } from 'react'
import TableForm from '../../../components/App/Table/TableForm';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import * as tableActions from '../../../main/redux/actions/tableActions';

const initialFormValues = {
    name: 'name table',
    capacity: '4',
    isAvailable: 'false',
    location: ''
}

const TableFormContainer = () => {

    const dispatch = useDispatch();
    const createTable = (table) => dispatch( tableActions.createTable(table) ); 
    const updateTable = (table) => dispatch( tableActions.updateTable(table) );

    const { table:tableActive } = useSelector( state => state.tableUpdate );
    

    const [ form, setForm ] = useState(initialFormValues);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if ( tableActive?.id ) {
            setForm({...tableActive});
            setEditMode(true);
        } else {
            setForm(initialFormValues);
            setEditMode(false)
        }
        console.log('ooo')
    }, [tableActive]);

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
        <TableForm table={form} onChange={onChange} handleSubmit={handleSubmit} editMode={editMode} />
    )
}

export default TableFormContainer
