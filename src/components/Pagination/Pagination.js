import styles from "./Pagination.module.scss";

const Pagination = (props) => {
  const { currentPage, maxPageLimit, minPageLimit, totalPages } = props;
  const data = props.data;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    props.onPrevClick();
  };
  const handleNextClick = () => {
    props.onNextClick();
  };
  const handlePageClick = (e) => {
    props.onPageChange(e);
  };

  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li
          key={page}
          id={page}
          onClick={handlePageClick}
          className={
            currentPage === page
              ? `${styles.page} ${styles.active}`
              : `${styles.page}`
          }
          // style={currentPage === page ? {color: 'red'} : null}
        >
          {page}
        </li>
      );
    } else {
      return null;
    }
  });

  console.log("pageNumbers", pageNumbers);
  console.log("data", data);

  // page ellipses
  let pageIncrementEllipses = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>;
  }
  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li>;
  }

  return (
    <ul className={styles["wrap-pagination"]}>
      <li>
        <button
          className={styles["prev-page"]}
          onClick={handlePrevClick}
          disabled={currentPage === pages[0]}
        >
          Prev
        </button>
      </li>
      {pageDecremenEllipses}
      {pageNumbers}
      {pageIncrementEllipses}
      <li>
        <button
          className={styles["next-page"]}
          onClick={handleNextClick}
          disabled={currentPage === pages[pages.length - 1]}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
