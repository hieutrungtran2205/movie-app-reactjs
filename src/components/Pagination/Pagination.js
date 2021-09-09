import React, { useState } from "react";
import "./Pagination.css";
function Pagination({ page, totalPage, handlePageChange }) {
  const [goPage, setGoPage] = useState(page);
  const handleClick = (newpage) => {
    handlePageChange(newpage);
  };

  return (
    <div className="container">
      <div className="pagination">
        <button className="waves-effect waves-light btn-flat"
          disabled={page === 1}
          onClick={() => {
            handleClick(page - 1);
          }}
        >
          Preview
        </button>
        <button className="waves-effect waves-light btn-flat"
          disabled={page === totalPage}
          onClick={() => {
            handleClick(page + 1);
          }}
        >
          Next
        </button>

        <div className="current-page">
          <span>
            Page {page} of {totalPage}
          </span>
        </div>


        <div className="goto-page">

          <div class="input-field col s6">
            <input id="last_name" onChange={(e) => {
              setGoPage(e.target.value);
            }}
              type="number" className="btn-search" />
            <label for="last_name">Goto page</label>
          </div>
          <button className="waves-effect waves-light btn-flat"
            onClick={() => {
              if (goPage > totalPage || goPage < 1) {
                return;
              }
              handleClick(goPage);
            }}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
