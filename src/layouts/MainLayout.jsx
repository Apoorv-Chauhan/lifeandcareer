import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Content */}
      <div className="flex-1 bg-gray-200 flex items-center justify-center">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
