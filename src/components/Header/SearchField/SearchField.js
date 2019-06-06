import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const searchField = (props) => {
    return (
        <div className="search-field">
            <input
                className="search-input"
                placeholder="Search for..."
                type="text"
                value={props.searchTerm}
                onChange={props.updateSearchTerm}
                onKeyDown={props.fetchGiphyData}/>
            <button
                className="search-button"
                type="button"
                onClick={props.fetchGiphyData}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
}

export default searchField
