import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getAuthorization } from '../../redux/authorization/authorizationSelectors'

const styles = {
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontWeight: 700,
        color: 'black'
    },
    activeLink: {
        color: 'red'
    }
}

function Navigation() {
    const isAuthorized = useSelector(getAuthorization)

    return (
        <div>
            <NavLink
                to="/" exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                Home
            </NavLink>
            {isAuthorized && (
                <NavLink
                    to="/contacts" exact
                    style={styles.link}
                    activeStyle={styles.activeLink}
                >
                    Contacts
                </NavLink>
            )}
        </div>
    )
}

export default Navigation