import { useState, useEffect } from 'react'
import { api } from '../../api';
import './style.css';

interface AllMovies {
    title: string;
    original_title: string;
    original_title_romanised: string;
    description: string;
    release_date: string;
    id: string
}

export function MoviesList() {
    const [allMovies, setAllMovies] = useState<AllMovies[]>([])

    useEffect(() => {
        api.get('/films').then(response => {
            setAllMovies(response.data)
            console.log(response.data)
        })
    }, [])

    const handleSelectMovie = (movie: AllMovies) => {
    console.log(movie.description)
    }


    return (
        <div>
            <h1>STUDIO GHIBLI</h1>
            <section className="movies-list">
                <ul>{
                    allMovies.map((movie, i) => (
                    <li key={i} onClick={() => handleSelectMovie(movie)}>{movie.title}</li>
                       ))
                    }
                </ul>
            </section>
        </div>
    )
}
