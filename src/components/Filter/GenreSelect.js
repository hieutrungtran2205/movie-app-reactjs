import { useState, useEffect } from "react";
import axios from "axios";
const GenreSelect = () => {
  const [genres, SetGenres] = useState([]);
  const fetchGenre = async () => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=cb1cb02271e379c911c6d9401d1eb7f8&language=vi';
    const response = await axios.get(url);
    const data = await response.data;
    SetGenres(data.genres);
  };
  useEffect(() => {
    fetchGenre();
  }, []);
  const genresOption = genres.map((genres) => {
    return <option value={genres.id}>{genres.name}</option>;
  });
  return (
    <>
      <option value="">- Tất cả -</option>
      {genresOption}
    </>
  );
};
export default GenreSelect;
