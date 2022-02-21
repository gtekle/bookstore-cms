import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item"><Link to="/">Books</Link></li>
      <li className="nav-item"><Link to="/categories">Categories</Link></li>
    </ul>
  </nav>
);

export default NavBar;
