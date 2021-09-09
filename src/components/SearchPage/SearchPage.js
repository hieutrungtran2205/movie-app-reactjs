import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import Poster from "../Poster/Poster";
import "./SearchPage.css";

function SearchPage({ getId }) {
  const [dataSearch, setDataSearch] = useState([]);
  const [query, setQuery] = useState("");
  const typingTimeoutRef = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const fetchMovie = async (searchKey) => {
      const queryString = searchKey.replace(" ", "+");
      const URL = `
        https://api.themoviedb.org/3/search/movie?api_key=cb1cb02271e379c911c6d9401d1eb7f8&query=${queryString}`;
      const response = await fetch(URL);
      const data = await response.json();
      const { results } = data;
      if (results) {
        setDataSearch(results);
      }
    };
    fetchMovie(query);
  }, [query]);
  const handleInput = (e) => {
    const value = e.target.value;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setQuery(value);
      history.push(`/search/${value}`)
    }, 2000);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <section className="col s4 offset-4">
            <form action="">
              <div className="input-field">
                <input
                  className="btn-search"
                  onChange={handleInput}
                  type="text"
                  placeholder="Tìm kiếm..."
                />
              </div>
            </form>
          </section>
        </div>

      </div>
      <Poster
        type={"movie"}
        getId={getId}
        filmData={dataSearch}
        number={!dataSearch ? 0 : dataSearch.length}
      />
    </div>
  );
}

export default SearchPage;
