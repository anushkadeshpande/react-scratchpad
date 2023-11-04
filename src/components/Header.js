const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img src="https://firebasestorage.googleapis.com/v0/b/github-readme-content.appspot.com/o/fast-food-outline.svg?alt=media&token=8b793cf4-ad2b-485b-aae6-27debbf8b2e6&_gl=1*1q9v9y*_ga*MjAxOTg3ODU3Mi4xNjg1ODU4Nzkz*_ga_CW55HF8NVT*MTY5NzMyMTI2MS4xMS4xLjE2OTczMjEyOTAuMzEuMC4w" />
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
