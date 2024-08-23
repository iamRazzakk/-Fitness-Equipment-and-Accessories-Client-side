import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div className="text-white bg-black">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
