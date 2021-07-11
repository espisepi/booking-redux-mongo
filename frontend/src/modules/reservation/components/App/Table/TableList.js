import React from 'react'
import PropTypes from 'prop-types'

const TableList = ({tables, deleteTable}) => {

    if(!Array.isArray(tables) || tables.length === 0 ) { return <h1>Tabla vacia</h1> }
    
    return (
        <div>
            { tables?.length !== 0 && tables.map( table => (
                <div key={table.id}>

                    <h1>{table.name}</h1>
                    <h4>capacity: {table.capacity}</h4>
                    { table?.reservation ? (<h4>Reservada</h4>) : (<h4>No Reservada</h4>)}
                    <button type="button" onClick={ () => deleteTable(table.id) }>delete</button>

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
    deleteTable: PropTypes.func.isRequired
}

export default TableList
