import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./home.css";
import jslogo from "../pic/js.png";
import htmllogo from "../pic/html.png";
import tailwindlogo from "../pic/tailwind.png";
import logo from "../pic/logo.png";

const Home = () => {
  return (
    <div>
      <section className="hero" id="home">
        <div className="container f-flex top">
          <div className="left top">
            <h3>Welcome To My Word</h3>
            <h1>
              Hi, Saya <span>Mohamad Dimas Prayoga</span>
            </h1>
            <h2>
              Saya
              <span>
                <Typewriter
                  words={["Profesional Code", "Developer"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam voluptatem temporibus repellat omnis, architecto
              accusantium esse adipisci minus debitis! Vero!
            </p>

            <div className="hero-btn d-flex">
              <div className="col-1">
                <h4>Temukan Bersamaku</h4>
                <div className="button">
                  <button className="btn-shadow">
                    <i className="fab fa-instagram"></i>
                  </button>

                  <button className="btn-shadow">
                    <i className="fab fa-whatsapp"></i>
                  </button>

                  <button className="btn-shadow">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col-1">
                <h4>Skill</h4>
                <button className="btn-shadow">
                  <img src={htmllogo} alt="" />
                </button>
                <button className="btn-shadow">
                  <img src={tailwindlogo} alt="" />
                </button>
                <button className="btn-shadow">
                  <img src={jslogo} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="right-img">
              <img src={logo} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
