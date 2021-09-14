import React, { useEffect, useState } from "react";
import CountrySelect from "./CountrySelect";
import "./FilterMovie.css";
import GenreSelect from "./GenreSelect";
import ReleaseYear from "./YearSelect";

function FilterMovie({
  handleChangeYear,
  handleChangeGenre,
  handChangeCountry,
  handleSort,
}) {

  const changeYear = (e) => {
    const value = e.target.value;
    handleChangeYear(value);
  };
  const changeGenre = (e) => {
    const value = e.target.value;
    handleChangeGenre(value);
  };
  const changeCountry = (e) => {
    const value = e.target.value;
    handChangeCountry(value);
  };
  const changeSort = (e) => {
    const value = e.target.value;
    handleSort(value);
  };

  return (
    <div className="input-field2">
      <div className="input-field3">
        <div className="option">
          <label>Thể loại:</label>
          <select className="browser-default" onChange={changeGenre}>
            <GenreSelect />
          </select>
        </div>
        <div className="option">
          <label>Quốc gia:</label>
          <select className="browser-default" onChange={changeCountry}>
            <CountrySelect />
          </select>
        </div>
      </div>
      <div className="input-field3">
        <div className="option">
          <label>Năm:</label>
          <select className="browser-default" onChange={changeYear} id="gener">
            <ReleaseYear />
          </select>
        </div>
        <div className="option">
          <label>Sắp xếp:</label>
          <select className="browser-default" onChange={changeSort}>
            <option value="popularity.desc">Top thịnh hành</option>
            <option value="vote_count.desc">Nhiều lượt xem nhất</option>
            <option value="revenue.desc">Đạt doanh thu cao nhất</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterMovie;
