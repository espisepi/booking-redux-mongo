import React from 'react'
import PropTypes from 'prop-types'

import { Route } from 'react-router-dom';

const PublicRoute = ({
    component: Component,
    ...props
}) => {
    return (
        <Route { ...props } 
            component={ (propsComponent) => ( <Component { ...propsComponent } /> ) }
        />
    )
}

PublicRoute.propTypes = {
    component: PropTypes.func.isRequired
}

export default PublicRoute
