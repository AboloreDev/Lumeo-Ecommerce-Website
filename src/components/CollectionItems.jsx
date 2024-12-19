/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { StoreContext } from "../context/ShopContext";
import CollectionProducts from "./CollectionProducts";
import Pagination from "./Pagination";
import Loader from "./Loader"; // Import the loader component

const CollectionItems = ({ filterProducts, setFilterProducts }) => {
  const { products } = useContext(StoreContext);

  // states
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  // Pagination variables
  const productsPerPage = 8;
  const totalPages = Math.ceil(filterProducts.length / productsPerPage);
  const indexOfLastExercise = currentPage * productsPerPage;
  const indexOfFirstExercise = indexOfLastExercise - productsPerPage;
  const currentproducts = Array.isArray(filterProducts)
    ? filterProducts.slice(indexOfFirstExercise, indexOfLastExercise)
    : [];

  // Simulate data fetching or loading process
  useEffect(() => {
    // Simulate loading with a timeout
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false after data is "fetched"
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(loadingTimeout); // Cleanup timeout on unmount
  }, [filterProducts]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Render
  return (
    <div className="flex-1 space-y-10">
      {/* Title */}
      <div className="text-center text-2xl uppercase flex items-center justify-center gap-2 font-bold">
        All Collections{" "}
        <span className="text-3xl">
          <FaArrowRightLong />
        </span>
      </div>

      {/* Loader */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : (
        <>
          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentproducts.map((item, index) => (
              <CollectionProducts item={item} key={index} />
            ))}
          </div>

          {/* Pagination */}
          <div>
            <div className="mb-20">
              {filterProducts.length > productsPerPage && (
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CollectionItems;
