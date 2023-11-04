import { LOGO_URL } from "../utils/constants";

import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img src={LOGO_URL} />
      </div>
      <div className="Header__nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
