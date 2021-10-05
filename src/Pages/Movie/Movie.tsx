import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from '../../api/api';
import './style.css';
import { ghibliImages } from '../../api/api';


type MovieProps = {
  title: string;
  original_title: string;
  original_title_romanised: string;
  description: string;
  release_date: string;
  id: string;
}

export const Movie = () => {
  const [movie, setMovie] = useState<MovieProps>()
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const req = async () => {
      try {
        const response = await api.get(`/films/${params.id}`)
        setMovie(response.data)
      }
      catch (e) {
        const error = e as AxiosError
        console.log(error)
      }
    }
    req()
  }, [params.id])

  return (
    <div className="movie-details">
      {ghibliImages[movie?.title!] && (
        <img src={ghibliImages[movie?.title!]} alt="img" />
      )}
      <h1>{movie?.title}</h1>
      <h3>{movie?.original_title}</h3>
      <h3>{movie?.original_title_romanised}</h3>
      <p>Date: {movie?.release_date}</p>
      <p>{movie?.description}</p>
      <Link to="/">
        return
      </Link>
    </div>
  )
}