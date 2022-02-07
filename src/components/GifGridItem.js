import React from 'react'

const GifGridItem = ({ url, title }) => {
    return (
        <div className="gif-grid-item">
            <img src={ url } title={ title }/>
            <p>{ title }</p>
        </div>
    )
}

export default GifGridItem;