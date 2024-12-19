import { Outlet } from "react-router-dom";
import AppNav from "../components/AppNav";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto h-screen font-nunito px-6 py-0">
      <ToastContainer />

      {/* Consistent NavBar accross all pages */}
      <AppNav />
      {/* Search bar */}
      <SearchBar />
      {/* Nested routes outlets */}

      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;
