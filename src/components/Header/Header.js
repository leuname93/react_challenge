import React from 'react'

import {Route} from 'react-router-dom'
import Switch from 'react-router-dom/Switch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'

import Nav from './Nav/Nav'
import SearchField from './SearchField/SearchField'

const header = (props) => {
    return (
        <section className="header">
            <Nav />
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    render={() =>
                        <SearchField
                            searchTerm={props.searchTerm}
                            updateSearchTerm={props.updateSearchTerm}
                            fetchGiphyData={props.fetchGiphyData}/>}
                    />
                <Route 
                    path="/favorites" 
                    render={() => 
                        <h1>
                            Tus Gifs Favoritos <FontAwesomeIcon className="favorite-icon" icon={faHeart} /> 
                        </h1>
                        } 
                    />
            </Switch>
        </section>
    )
}

export default header