import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";

const Paginate = ({ isPaginate, pages, currentPage, onClick }) => {
  return (
    <>
      {isPaginate ? (
        <Pagination size="sm">
          {[...Array(pages)].map((val, i) => (
            <Pagination.Item
              onClick={currentPage === i + 1 ? undefined : onClick(i + 1)}
              key={"pg-no" + i}
              active={currentPage === i + 1}>
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      ) : null}
    </>
  );
};
Pagination.propTypes = {
  isPaginate: PropTypes.bool,
  pages: PropTypes.number,
  currentPage: PropTypes.number,
  onClick: PropTypes.func,
};

export default Paginate;
