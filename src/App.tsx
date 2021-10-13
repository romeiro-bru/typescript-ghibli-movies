import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { MoviesList } from './Pages/MoviesList/MoviesList';
import { Movie } from './Pages/Movie/Movie';
import { Header } from './Components/Header/Header';

const MainPage = () => <MoviesList />

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
    </div>
  );
}

export default App;
