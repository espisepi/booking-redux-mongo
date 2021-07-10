import React from 'react'
import PropTypes from 'prop-types'
import TableListContainer from '../containers/Table/TableListContainer'
import TableFormContainer from '../containers/Table/TableFormContainer'

function AdminPage(props) {
    return (
        <div>
            Admin page
            <TableListContainer />
            <TableFormContainer />
        </div>
    )
}

AdminPage.propTypes = {

}

export default AdminPage

