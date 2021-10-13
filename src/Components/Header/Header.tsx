import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export function Header() {
  return (
    <header>
      <Link to="/">
        <h1>STUDIO GHIBLI</h1>
      </Link>
      <Button />
    </header>
  )
}