import React from 'react'
import PropTypes from 'prop-types';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
            <h2 className="animate__animated animate__bounceIn">{ category }</h2>
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <div className="gif-grid animate__animated animate__fadeIn">
                {
                    images.map(img => {
                        return <GifGridItem key={ img.id } { ...img }/>
                    })
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;