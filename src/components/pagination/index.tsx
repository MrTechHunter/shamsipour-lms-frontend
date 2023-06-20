import React from 'react';
import ReactPaginate from 'react-paginate';
import './style.css';
import PaginationSkeleton from './skeleton';
import PageRange from './pageRange';
import './font-icons/style.css';

interface IPagination {
  totalPage: number;
  currentPage: number;
  pageChangeHandler: (page: number | any) => number | void;
  loading: boolean;
  pageRange: boolean;
  pageRangeHandler?: any;
  pageSize: number;
}
const Pagination = ({
  totalPage,
  currentPage,
  pageChangeHandler,
  loading,
  pageRange,
  pageRangeHandler,
  pageSize,
}: IPagination) => {
  if (loading) return <PaginationSkeleton />;
  else
    return (
      <div className="pagination-container">
        {pageRange && (
          <PageRange
            pageRangeHandler={pageRangeHandler}
            currentPage={currentPage > totalPage ? totalPage : currentPage}
            totalPage={totalPage}
            pageSize={pageSize}
          />
        )}
        <ReactPaginate
          pageCount={totalPage || 0}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          forcePage={currentPage > totalPage ? totalPage : currentPage}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          activeClassName={'active'}
          previousLinkClassName={'page-link'}
          nextLinkClassName={'page-link'}
          previousClassName={'page-item'}
          nextClassName={'page-item'}
          previousLabel={
            <>
              <i className="pag-chevron-left" />
              <i className="pag-chevron-left" />
            </>
          }
          nextLabel={
            <>
              <i className="pag-chevron-left" />
              <i className="pag-chevron-left" />
            </>
          }
          onPageChange={(selected: number | any) => pageChangeHandler(selected.selected + 1)}
        />
      </div>
    );
};

export default Pagination;
