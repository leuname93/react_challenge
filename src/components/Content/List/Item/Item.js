import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const item = (props) => {
    const styles = {
        width: props.images.fixed_width.width + 'px',
        height: props.images.fixed_width.height + 'px'
      }
    return (
        <li 
            className={ props.isFavorited ? 'favorite' : '' }
            onClick={
                props.isFavorited ?
                () => props.removeFromFavorites(props) :
                () => props.addToFavorites(props) }        
            style={styles}    
                >
            <img 
                src={props.images.fixed_width.url}
                alt={props.title}
                />
            <FontAwesomeIcon className="favorite-icon" icon={props.isFavorited ? faHeart : farHeart} />
        </li>
    )
}

export default item
