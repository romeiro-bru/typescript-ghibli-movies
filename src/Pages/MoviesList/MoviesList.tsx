import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/api';
import './style.css';
import { ghibliImages } from '../../api/api';

interface AllMovies {
  title: string;
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
    <ul className="movies-list">{
      allMovies.map((movie, i) => (
        <Link to={`/${movie.id}`}>
          <li key={i}>
            <p>{movie.title}</p>
            <img src={ghibliImages[movie?.title!]} alt="img" />
          </li>
        </Link>
      ))
    }
    </ul>
  )
}