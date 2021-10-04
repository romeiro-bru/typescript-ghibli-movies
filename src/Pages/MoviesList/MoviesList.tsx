import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/api';
import './style.css';

export interface AllMovies {
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
    const req = async () => {
      try {
        const response = await api.get<AllMovies[]>('/films')
        setAllMovies(response.data)
      } catch (e) {
        const error = e as AxiosError
        console.log(error)
      }
    }
    req()
  }, [])

  return (
    <div>
      <h1>STUDIO GHIBLI</h1>
      <ul className="movies-list">{
        allMovies.map((movie, i) => (
          <li key={i}>
            <Link to={`/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))
      }
      </ul>
    </div>
  )
}