import { Link, useParams, useHistory } from "react-router-dom"
import { useEffect } from "react";

export const Movie = () => {
  const history = useHistory();
  const params = useParams<{ id: string }>();
  console.log(params.id)

  const handleReturn = () => {
    history.push("/")
  }

  return (
    <div>
      <h1>{params.id}</h1>
      <button onClick={handleReturn}>
        return
      </button>
    </div>
  )
}