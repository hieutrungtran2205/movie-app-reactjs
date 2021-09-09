import React, { useState, useEffect } from 'react';
import Poster from "../Poster/Poster";
import './HomePage.css';

function HomePage({ getId }) {

  const [newMovie, setNewMovie] = useState([]);
  const [newTV, setNewTV] = useState([]);

  useEffect(() => {
    const fetchMovie = async (specify) => {
      const URL = `https://api.themoviedb.org/3/discover/${specify}?api_key=cb1cb02271e379c911c6d9401d1eb7f8`;
      const response = await fetch(URL);
      const data = await response.json();
      const { results } = data;
      if (specify === "movie") {
        setNewMovie(results);
      } else setNewTV(results);
    };
    fetchMovie("movie");
    fetchMovie("tv");
  }, []);
  return (
    <div>
      <div className="title">
        <h5>Phim mới ra rạp</h5>
      </div>
      <Poster type={"movie"} getId={getId} filmData={newMovie} number={16} />
      {/* <PosterTV type={"movie"} getId={getId} filmData={newMovie} number={16} /> */}
      <div className="title">
        <h5>Hot TV Series</h5>
      </div>
      <Poster type={"tv"} getId={getId} filmData={newTV} number={16} />
    </div>
  );
}

export default HomePage;