import React from 'react'

import { Route } from 'react-router-dom'
import Switch from 'react-router-dom/Switch';

import List from './List/List'
import NoResult from './NoResult/NoResult'
import LoadMore from './LoadMore/LoadMore'

const content = (props) => {
    return (
        <section className="content">
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    render={() => 
                        props.searched && props.data.length === 0 ?
                            <NoResult>
                                Sorry, no result! Try again :)
                            </NoResult> :
                            <div>
                                <List 
                                    data={props.data} 
                                    favorites={props.favorites} 
                                    addToFavorites={props.addToFavorites} 
                                    removeFromFavorites={props.removeFromFavorites}
                                    />  
                                { 
                                    props.hasMore && props.searchTerm === props.prevSearchTerm ?                 
                                   <LoadMore loadMore={props.loadMore} /> : null} 
                            </div>
                        }
                    />
                <Route 
                    path="/favorites" 
                    render={() => 
                        
                        props.favorites.length === 0 ? 
                            <NoResult>
                                Aun no tienes favoritos.<br></br>Prueba Agregando alguno!
                            </NoResult> :
                            
                            <List 
                                data={props.favorites} 
                                removeFromFavorites={props.removeFromFavorites}
                                />
                        } 
                    />             
            </Switch>      
        </section>
    )
}

export default content