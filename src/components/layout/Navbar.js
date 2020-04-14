import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {

    static defaultProps = {
        title:'Default Title',
        icon:'beep'
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <i className={this.props.icon} />
                <h1>{this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar
