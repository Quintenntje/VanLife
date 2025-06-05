import { NavLink } from "react-router-dom";
export default function NavbarLink({ to, children }) {
  return (
    <NavLink
      end={children === "Dashboard"}
      to={to}
      className={({isActive}) => isActive ? "text-orange-500" : "text-black hover:text-orange-500 transition-colors"}
    >
      {children}
    </NavLink>
  );
}
