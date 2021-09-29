import { useState, useEffect } from 'react';
import { api } from '../../api/api';
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
        })
    }, [])

    const handleSelectMovie = (movie: AllMovies) => {
    console.log(movie.id)
    }
 

    return (
        <div>
            <h1>STUDIO GHIBLI</h1>
                <ul className="movies-list">{
                    allMovies.map((movie, i) => (
                    <li key={i} onClick={() => handleSelectMovie(movie)}>{movie.title}</li>
                       ))
                    }
                </ul>
        </div>
    )
}
