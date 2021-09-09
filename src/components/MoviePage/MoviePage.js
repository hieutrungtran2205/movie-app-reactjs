import React, { useEffect, useState } from "react";
import FilterMovie from "../Filter/FilterMovie";
import Pagination from "../Pagination/Pagination";
import Poster from "../Poster/Poster";
function MoviePage({ getId }) {
  const [filters, setFilters] = useState({
    page: 1,
    year: "",
    genre: "",
    sortBy: "popularity.desc",
    country: "en",
  });
  const [renderfilm, setRenderFilm] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=cb1cb02271e379c911c6d9401d1eb7f8&with_genres=${filters.genre}&page=${filters.page}&primary_release_year=${filters.year}&with_original_language=${filters.country}&sort_by=${filters.sortBy}`;
      const response = await fetch(url);
      const data = await response.json();
      const { results, total_pages } = data;
      setRenderFilm(results);
      setTotalPage(total_pages);
    };
    fetchMovie();
  }, [filters]);

  const handleChangeGenre = (value) => {
    setFilters({ ...filters, page: 1, genre: value });
  };

  const handleChangeYear = (value) => {
    setFilters({ ...filters, page: 1, year: value });
  };

  const handChangeCountry = (value) => {
    setFilters({ ...filters, page: 1, country: value });
  };
  const handlePageChange = (pageNumber) => {
    setFilters({ ...filters, page: Number(pageNumber) });
  };
  const handleSort = (value) => {
    setFilters({ ...filters, page: 1, sortBy: value });
  };
  return (
    <>

      <FilterMovie
        handleChangeYear={handleChangeYear}
        handleChangeGenre={handleChangeGenre}
        handChangeCountry={handChangeCountry}
        handleSort={handleSort}
      />

      <div className="title">
        <h5>Phim Chiếu Rạp</h5>
      </div>
      <Poster
        type={"movie"}
        getId={getId}
        filmData={renderfilm}
        number={20}
      />
      <Pagination
        page={filters.page}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
export default MoviePage;
