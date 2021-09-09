import React from "react";
import { useHistory } from "react-router-dom";
import './Poster.css';

function Poster({ type, filmData, number, getId }) {
  filmData.splice(
    number,
    filmData.length - number
  ); /*define how many poster render*/

  let history = useHistory();
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {filmData.map((film) => {
            return (
              <div className="col">
                <div className="card">
                  <div className="card-image"
                    onClick={() => {
                      history.push(`/${type}/${film.id}`);
                      getId(film.id, type);
                    }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                      alt=""
                    />
                    <div className="vote">{film.vote_average}</div>
                  </div>
                  <p className="card-content">{film.title || film.name}</p>
                  {/* ({film.release_date.slice(0,4) || film.first_air_date.slice(0,4)}) */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Poster;
