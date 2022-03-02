import React from "react";
import { Link } from "react-router-dom";
import profileimage from "../../images/profl.jpg";
import "../../styles.css";

const Home = () => {
  return (
    <div class="fir">
      <div id="pages">
        <Link to="/myportfolio/" style={{ textDecoration: "none" }}>
          <p class="lin">HOME</p>
        </Link>
        &nbsp;&nbsp;
        <Link to="/about" style={{ textDecoration: "none" }}>
          <p class="lin">ABOUT</p>
        </Link>
        &nbsp;&nbsp;
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <p class="lin">PROJECTS</p>
        </Link>
        &nbsp;&nbsp;
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <p class="lin">CONTACT</p>
        </Link>
        &nbsp;&nbsp;
      </div>
      <div id="ima">
        <img class="profileimage" src={profileimage} alt="Profile" />
      </div>
      <div class="container-sm">
        <h1 class="nam1">KARUNGI ANNA</h1>
        <h2 class="nam2">Developer and UX designer in training</h2>
      </div>
      <footer>
        <a href="https://github.com/KarungiAnna">
          <i class="fab fa-github-square"> Github</i>
        </a>{" "}
        &nbsp;
        <a href="https://www.instagram.com/anna_mary_laura/">
          <i class="fab fa-instagram-square"> Instagram</i>
        </a>{" "}
        &nbsp;
        <a href="https://www.linkedin.com/in/karungi-anna/">
          <i class="fa fa-linkedin-square" aria-hidden="true">
            {" "}
            Linkedin
          </i>
        </a>{" "}
        <br />
        <h4 id="cpyrght">©Copyright 2022</h4>
      </footer>
    </div>
  );
};

export default Home;
