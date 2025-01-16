import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Craving something delicious? Choose from a variety of your favorite
          dishes and get them delivered straight to your doorstep with ease.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
