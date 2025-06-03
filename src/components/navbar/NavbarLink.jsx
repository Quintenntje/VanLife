import { Link } from "react-router-dom";
export default function NavbarLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-black hover:text-orange-500 transition-colors"
    >
      {children}
    </Link>
  );
}
