import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({user: icon, title}) => {

    return (
        <nav className="navbar bg-primary">
            <h1><i className={icon} /> {title}</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
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
