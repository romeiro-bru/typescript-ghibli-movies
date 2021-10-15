import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from '../../api/api';
import './style.css';
import { ghibliImages } from '../../api/api';
import arrow from '../../assets/images/left-arrow.png';


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
        const response = await api.get<MovieProps>(`/films/${params.id}`)
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
    <main className="movie-details">
      <div className="movie-img-title">
        <Link to="/">
          <img src={arrow} alt="" />
        </Link>
        {ghibliImages[movie?.title!] && (
          <img src={ghibliImages[movie?.title!]} alt="img" />
        )}
        <h2>{movie?.title}</h2>
        <span>{movie?.release_date}</span>
      </div>

      <div className="movie-description">
        <h3>{movie?.original_title}</h3>
        <h3>{movie?.original_title_romanised}</h3>
        <article>{movie?.description}</article>
      </div>
    </main>
  )
}