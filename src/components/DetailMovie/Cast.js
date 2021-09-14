import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from "react-router-dom";
const Cast = ({ id, type, getCastId }) => {
  const [actors, setActor] = useState([]);
  useEffect(() => {
    const getCast = async () => {
      const url = `
            https://api.themoviedb.org/3/${type}/${id}/credits?api_key=cb1cb02271e379c911c6d9401d1eb7f8`;
      const response = await fetch(url);
      const data = await response.json();
      const actorList = data.cast;
      setActor(actorList);
    };
    getCast();
  });
  let history = useHistory();
  const actorList = actors.map((actor) => {
    return (
      <div
        className="item"
        onClick={() => {
          history.push(`/cast/${actor.name.replace(" ", "-")}`);
          getCastId(actor.id, actor.name.replace(" ", "-"));
        }}
      >
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w138_and_h175_face/${actor.profile_path}`}
            alt=""
          />
        </figure>

        <p className="name">{actor.name}</p>
        <p className="character">{actor.character}</p>
      </div>
    );
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>{actorList}</Slider>
    </div>
  );
};
export default Cast;
