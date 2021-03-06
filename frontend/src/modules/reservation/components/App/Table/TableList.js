import React from 'react'
import PropTypes from 'prop-types'

const TableList = ({tables, loading, error, deleteTable, editTable, makeReservation}) => {

    if( loading ) { return <h1>Loading</h1> }

    if( error ) { return <h1>Error: {error} </h1> }

    if(!Array.isArray(tables) || tables.length === 0 ) { return <h1>Tabla vacia</h1> }

    return (
        <div>
            { tables?.length !== 0 && tables.map( table => (
                <div key={table.id}>

                    <h1>{table.name}</h1>
                    <h4>capacity: {table.capacity}</h4>
                    { table?.reservation ? (<h4>Reservada</h4>) : (<h4>No Reservada</h4>)}
                    { deleteTable && <button type="button" onClick={ () => deleteTable(table.id) }>delete</button> }
                    { editTable && <button type="button" onClick={ () => editTable(table) }>edit</button> }
                    { makeReservation && <button type="button" onClick={ () => makeReservation(table.id) }>book</button> }
                </div>
            )) }
        </div>
    )
}

TableList.propTypes = {
    tables: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        capacity: PropTypes.number.isRequired,
        isAvailable: PropTypes.bool,
        location: PropTypes.string,
        reservation: PropTypes.shape({
            date: PropTypes.date,
            table: PropTypes.string,
            name: PropTypes.string,
            phone: PropTypes.string,
            email: PropTypes.string
        })
    })),
    loading: PropTypes.bool,
    error: PropTypes.string,
    deleteTable: PropTypes.func,
    editTable: PropTypes.func,
    makeReservation: PropTypes.func
}

export default TableList
