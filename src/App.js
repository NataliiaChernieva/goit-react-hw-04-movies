import './App.css';
//import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Movies from './views/Movies';
import MovieInfo from './views/MovieInfo';
import NotFound from './views/NotFound';
import Container from './components/Container/Container.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

const App = () => (
  <Container>
    <header>
      <Navigation />
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route path="/movies/:movieId" component={MovieInfo} />
      <Route component={NotFound} />
    </Switch>
  </Container>
);

export default App;
