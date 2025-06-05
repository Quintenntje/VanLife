import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {isHomePage ? (
        <Outlet />
      ) : (
        <main className="flex-grow container mx-auto px-4 py-8">
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
}
