import NavbarLink from "./NavbarLink";

export default function HostDetailsNavbar() {
  return (
    <header className="bg-gray-50">
      <nav className="max-w-6xl mx-auto px-4 py-5">
        <div className="flex space-x-4 md:space-x-6">
          <NavbarLink to=".">Details</NavbarLink>
          <NavbarLink to="pricing">Pricing</NavbarLink>
          <NavbarLink to="photos">Photos</NavbarLink>
        </div>
      </nav>
    </header>
  );
}
