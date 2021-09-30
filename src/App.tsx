import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { MoviesList } from './Pages/MoviesList/MoviesList';
import { Movie } from './Pages/Movie/Movie';

const MainPage = () => <MoviesList />

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/:id" component={Movie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
