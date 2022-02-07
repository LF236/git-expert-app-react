import React from 'react'
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
export default GifGrid;