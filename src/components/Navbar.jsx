import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
       <Link to="/" className="nav-logo">CourseNest</Link>
      </Link>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/category/Beginner">Beginner</NavLink>
        <NavLink to="/category/Intermediate">Intermediate</NavLink>
      </div>
    </nav>
  );
}