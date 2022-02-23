import { FaUser } from 'react-icons/fa';

import NavBar from './NavBar';

const Header = () => (
  <div className="header">
    <div className="logo-nav-container">
      <h1 className="logo">Bookstore CMS</h1>
      <NavBar />
    </div>
    <button type="button" className="profile-button">
      <FaUser className="profile-icon" />
    </button>
  </div>
);

export default Header;
