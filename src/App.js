import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Movies from './views/Movies';
import NotFound from './views/NotFound';

const App = () => (
  <>
    <ul>
      <li><NavLink exact to='/'className="NavLink" activeClassName="NavLink--active">Home</NavLink></li>
      <li><NavLink to='/movies'className="NavLink" activeClassName="NavLink--active">Movies</NavLink></li>
    </ul>

    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/movies' component={Movies} />
      <Route component={NotFound}/>
    </Switch>
  </>
);

  


export default App;
