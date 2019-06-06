import React from 'react'

import classNames from 'classnames'

const loadMore = (props) => {
    const btnClass = classNames('load-more', {
        'is-loading': props.isLoading,
        'not-loaindg': !props.isLoading
    })
    return (
        <button 
            className={btnClass}
            onClick={props.loadMore}>
            see more
        </button>
    )
}

export default loadMore