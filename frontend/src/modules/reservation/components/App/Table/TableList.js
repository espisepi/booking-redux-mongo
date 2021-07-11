import React from 'react'
import PropTypes from 'prop-types'

const TableList = ({tables}) => {

    if(!Array.isArray(tables) || tables.length === 0 ) { return <h1>Tabla vacia</h1> }

    return (
        <div>
            { tables?.length !== 0 && tables.map( table => (
                <>
                <h1>{table.name}</h1>
                </>
            )) }
        </div>
    )
}

TableList.propTypes = {
    tables: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        capacity: PropTypes.number.isRequired,
        isAvailable: PropTypes.bool,
        location: PropTypes.string
    }))
}

export default TableList
