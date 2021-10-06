import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { MoviesList } from './Pages/MoviesList/MoviesList';
import { Movie } from './Pages/Movie/Movie';

const MainPage = () => <MoviesList />

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <h1>STUDIO GHIBLI</h1>
        </Link>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:id" component={Movie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
