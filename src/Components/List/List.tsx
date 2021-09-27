import React, { useState, useEffect } from 'react'
import { api } from '../../api';

interface Movies {
    title: string;
    original_title_romanised: string;
    description: string;
    release_date: string
}

export function List() {
    const [movies, setMovies] = useState<Movies[]>([])

    useEffect(() => {
        api.get('/films').then(response => {
            setMovies(response.data)
            console.log(movies)
        })
    }, [])


    return (
        <div>
            <h1>STUDIO GHIBLI</h1>
            <section className="movies-list">{
                movies.map((movie) => (
                <p>{movie.title}</p>
                ))
                }</section>
        </div>
    )
}
