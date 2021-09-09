import './App.css';
import { useState } from "react";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import SearchPage from './components/SearchPage/SearchPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviePage from './components/MoviePage/MoviePage';
import TVPage from './components/TVPage/TVPage';
import DetailMovie from './components/DetailMovie/DetailMovie';
import TopIMDbPage from './components/TopIMDbPage/TopIMDbPage';
import Actor from './components/ActorPage/Actor';
import WatchPage from './components/WatchPage/WatchPage';

function App() {
  const [movieID, setMovieID] = useState();
  const [movieType, setMovieType] = useState("");
  const [actor, setActor] = useState({
    actorId: "",
    name: "",
  });
  const getId = (newId, newType) => {
    setMovieID(newId);
    setMovieType(newType);
  };
  const getCastId = (myActorId, myActorName) => {
    const newActor = { ...actor, actorId: myActorId, name: myActorName };
    setActor(newActor);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage getId={getId} />
          </Route>
          <Route path="/type/movie">
            <MoviePage getId={getId} />
          </Route>
          <Route path="/type/tv">
            <TVPage getId={getId} />
          </Route>
          <Route path="/type/top_imdb">
            <TopIMDbPage getId={getId} />
          </Route>
          <Route exact path={`/${movieType}/${movieID}`}>
            <DetailMovie
              id={movieID}
              type={movieType}
              getCastId={getCastId}
            />
          </Route>
          <Route exact path={`/cast/${actor.name}`}>
            <Actor actor={actor} getId={getId} />
          </Route>
          <Route exact path={`/watch/${movieType}/${movieID}`}>
            <WatchPage type={movieType} id={movieID} />
          </Route>
          <Route path="/">
            <HomePage getId={getId} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
