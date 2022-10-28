import { useState, useEffect } from "react";

function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(true);

  const pageNum = [...Array(numberOfPages + 1).keys()].slice(1);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (currentPage > 1) {
      setDisablePrev(false);
    } else {
      setDisablePrev(true);
    }

    if (currentPage === numberOfPages) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  }, [currentPage, numberOfPages]);

  return (
    <div>
      <section className="pagination">
        <div className={disablePrev ? "disabled" : "prev"}>
          <p onClick={previousPage}>Previous</p>
        </div>
        <div className="pagination-num">
          {pageNum.map((num) => (
            <div key={num}>
              <button
                onClick={() => setCurrentPage(num)}
                className="pagination-child"
              >
                {num}
              </button>
            </div>
          ))}
        </div>
        <div className={disableNext ? "disabled" : "next"}>
          <p onClick={nextPage}>Next</p>
        </div>
      </section>
    </div>
  );
}

export default Pagination;
