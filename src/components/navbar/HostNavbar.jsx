import NavbarLink from "./NavbarLink";

export default function HostNavbar() {
  return (
    <header className="bg-gray-50">
      <nav className="max-w-6xl mx-auto px-4 py-5">
        <div className="flex space-x-4 md:space-x-6">
          <NavbarLink to="/host">Dashboard</NavbarLink>
          <NavbarLink to="/host/income">Income</NavbarLink>
          <NavbarLink to="/host/reviews">Reviews</NavbarLink>
        </div>
      </nav>
    </header>
  );
}
