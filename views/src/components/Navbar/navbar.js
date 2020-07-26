import React from "react";
import { navbarItems } from "./navbar-items";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { store } from "../../services/Store";
import Images from "../../images/Images";

const Navbar = ({ showElement }) => {
  const userData = useContext(store);
  const { dispatch } = userData;

  const handleClick = (element) => {
    dispatch({ type: "setElement", payload: element });
    showElement(true);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div
            id="logo"
            style={{
              background: `url(${Images.Logo_no_text})`,
              backgroundSize: "cover",
            }}
          />
        </Link>
      </div>
      <div className="navbar-items">
        {navbarItems.map((element, i) => {
          if (element.name === "Login" || element.name === "Register") {
            return (
              <p key={i} onClick={() => handleClick(element.name)}>
                {element.name}
              </p>
            );
          } else {
            return (
              <Link
                key={i}
                to={element.link}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p key={i}>{element.name}</p>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Navbar;
