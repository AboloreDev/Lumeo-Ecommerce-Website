/* eslint-disable react/prop-types */

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex items-center justify-center mt-4 overflow-hidden ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 border rounded-l ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-800 hover:bg-gray-100"
        }`}
      >
        <FaAngleLeft />
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => {
            onPageChange(number);
          }}
          className={`px-4 py-2 border-t border-b ${
            number === currentPage
              ? "bg-slate-500 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 border rounded-r ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-800 hover:bg-gray-100"
        }`}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
