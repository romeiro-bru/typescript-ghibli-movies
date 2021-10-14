import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { MoviesList } from './Pages/MoviesList/MoviesList';
import { Movie } from './Pages/Movie/Movie';
import { Header } from './Components/Header/Header';
import github from './assets/images/github.png';

const MainPage = () => <MoviesList />

const Icon = () => {
  return (
    <a href="https://github.com/romeiro-bru" target="_blank" rel="noopener noreferrer">
      <img className="github" src={github} alt="icon" />
    </a>
  )
}

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:id" component={Movie} />
        </Switch>
      </BrowserRouter>
      <Icon />
    </div>
  );
}

export default App;
