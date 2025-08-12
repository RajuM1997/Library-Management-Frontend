import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer position="top-right" />
      <main className="container mx-auto min-h-[calc(100vh-426px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
