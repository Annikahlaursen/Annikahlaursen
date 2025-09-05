import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Forside</NavLink>
      <NavLink to="/project">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
