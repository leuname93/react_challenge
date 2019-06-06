import React from 'react'
import {NavLink} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons'

const nav = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">
                <FontAwesomeIcon icon={faSearch} />
            </NavLink>
            <NavLink to="/favorites" activeClassName="current">
                <FontAwesomeIcon icon={faHeart} />
            </NavLink>
        </nav>
    )
}

export default nav