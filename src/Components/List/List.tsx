import React, { useState, useEffect } from 'react'
import { api } from '../../api';

interface AllMovies {
    title: string;
    original_title_romanised: string;
    description: string;
    release_date: string
}

export function List() {
    const [allMovies, setAllMovies] = useState<AllMovies[]>([])

    useEffect(() => {
        api.get('/films').then(response => {
            setAllMovies(response.data)
            console.log(allMovies)
        })
    }, [])


    return (
        <div>
            <h1>STUDIO GHIBLI</h1>
            <section className="movies-list">{
                allMovies.map((movie, i) => (
                <p key={i}>{movie.title}</p>
                ))
                }</section>
        </div>
    )
}
