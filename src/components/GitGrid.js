import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

export const GitGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeInDown'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Cargando....</p>}
            <div className="card-grid">
                {
                    images.map((img) => {

                        return <GifGridItem
                            key={img.id}
                            {...img}>
                        </GifGridItem>

                    })
                }
            </div>
        </>
    )
}
