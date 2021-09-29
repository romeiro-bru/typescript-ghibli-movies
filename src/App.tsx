import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import { MoviesList } from './Components/MoviesList/MoviesList';
import './Components/MoviesList/MoviesList.tsx';

const MainPage = () => (
    <MoviesList />
  )
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
