import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Navigation/Navigation.styled.jsx';
import Container from './components/Container/Container.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

const Home = lazy(() =>
  import('./views/Home' /* webpackChunkName: "home-page" */),
);
const Movies = lazy(() =>
  import('./views/Movies' /* webpackChunkName: "movie-page" */),
);
const MovieInfo = lazy(() =>
  import(
    './views/MovieInfo/MovieInfo.jsx' /* webpackChunkName: "movieInfo-page" */
  ),
);
const NotFound = lazy(() =>
  import('./views/NotFound' /* webpackChunkName: "nofound" */),
);

const App = () => (
  <Container>
    <Header>
      <Navigation />
    </Header>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/movies/:movieId" component={MovieInfo} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
