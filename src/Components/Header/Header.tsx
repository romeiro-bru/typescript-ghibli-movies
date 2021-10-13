import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './style.css';

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