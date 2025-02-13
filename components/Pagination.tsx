interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-center mt-8">
      {currentPage !== 1 ? (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-primary-700 rounded-md text-primary-200"
        >
          {"<<"}
        </button>
      ) : null}

      <span className="mx-4 text-primary-500">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage !== totalPages ? (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-primary-700 text-primary-200 rounded-md"
        >
          {">>"}
        </button>
      ) : null}
    </div>
  );
}
