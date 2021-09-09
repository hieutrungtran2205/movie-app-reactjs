import React, { useEffect, useState } from "react";
import Poster from "../Poster/Poster";
import "./Actor.css";
function Actor({ actor, getId }) {
  const [person, setPerson] = useState({});
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    const getCastInfor = async () => {
      const url = `https://api.themoviedb.org/3/person/${actor.actorId}?api_key=cb1cb02271e379c911c6d9401d1eb7f8&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      setPerson(data);
    };
    getCastInfor();
  }, []);
  useEffect(() => {
    const getCredits = async () => {
      const url = `
      https://api.themoviedb.org/3/person/${actor.actorId}/movie_credits?api_key=cb1cb02271e379c911c6d9401d1eb7f8&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      setCredits(data.cast);
    };
    getCredits();
  }, []);

  return (

    <div className="cast-section">
      <div className="container">
        <div className="cast-details">
          <div className="column small">
            <img
              className="avatar"
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}
              alt=""
            />
            <h3>Thông tin cá nhân</h3>
            <dl>
              <dt>Ngày sinh</dt>
              <dd>{person.birthday}</dd>
              <dt>Nơi sinh</dt>
              <dd>{person.place_of_birth}</dd>
            </dl>

          </div>
          <div className="column main">
            <h1>{person.name}</h1>
            <h3>Tiểu sử</h3>
            <div className="bio">{person.biography}</div>
          </div>
        </div>
        <h5>Các phim đã tham gia</h5>
      </div>


      <Poster
        type={"movie"}
        filmData={credits}
        number={16}
        getId={getId}
      />
    </div>
  );
}

export default Actor;
