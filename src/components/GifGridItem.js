import React from 'react'
import PropTypes from 'prop-types';
const GifGridItem = ({ url, title }) => {
    return (
        <div className="gif-grid-item animate__fadeIn">
            <img src={ url } title={ title }/>
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default GifGridItem;