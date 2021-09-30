import { useParams, useHistory } from "react-router-dom"

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