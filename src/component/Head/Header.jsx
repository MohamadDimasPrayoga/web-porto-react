import React, { useState } from "react";
import "./header.css";

const Header = () => {
  //ketika scrool header di atas

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  //toggle menu
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d-flex">
          <div className="logo">
            <h4>
              <a href="#">MDP</a>
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f-flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fa fa-times close home-btn"></i>
              ) : (
                <i className="fa fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* <section className="demo"></section> */}
    </>
  );
};

export default Header;
