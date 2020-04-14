import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({user: icon, title}) => {

    return (
        <nav className="navbar bg-primary">
            <i className={icon} />
            <h1>{title}</h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title:'Default Title',
    icon:'beep'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default Navbar
