import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/api';
import './style.css';

interface AllMovies {
  title: string;
  id: string;
  image: string
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
    <ul className="movies-list">{
      allMovies.map((movie, i) => (
        <li key={i}>
          <Link to={`/${movie.id}`}>
            <p>{movie.title}</p>
            <img src={movie.image} alt="img" />
          </Link>
        </li>
      ))
    }
    </ul>
  )
}