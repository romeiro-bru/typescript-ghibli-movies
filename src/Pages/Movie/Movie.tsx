import { Link, useParams } from "react-router-dom"
import { useEffect } from "react";

export const Movie = () => {
  const params = useParams<{ id: string }>();
  console.log(params.id)

  return (
    <div>
      <h1>{params.id}</h1>
      <button>
        return
        <Link to="/" />
      </button>
    </div>
  )
}