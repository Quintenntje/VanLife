import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-orange-50">
      <nav className="max-w-6xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl md:text-2xl">
            <Link
              to="/"
              className="text-black hover:text-orange-500 transition-colors"
            >
              #VANLIFE
            </Link>
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 text-sm md:text-base font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/vans"
              className="text-gray-700 hover:text-orange-500 text-sm md:text-base font-medium transition-colors"
            >
              Vans
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
