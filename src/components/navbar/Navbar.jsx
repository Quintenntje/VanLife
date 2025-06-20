import NavbarLink from "./NavbarLink";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-orange-50">
      <nav className="max-w-6xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl md:text-2xl">
            <NavLink to="/"> #VANLIFE</NavLink>
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <NavbarLink to="/host">Host</NavbarLink>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/vans">Vans</NavbarLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
