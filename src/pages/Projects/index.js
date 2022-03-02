import React from "react";
import { Link } from "react-router-dom";
import profileimage from "../../images/profl.jpg";
import School from "../../images/school management system.png";
import Guessinggame from "../../images/guessing game2.png";
import Casestudy from "../../images/casestudy.png";
import "../../styles.css";
const Projects = () => {
  return (
    <>
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
          <h2>PROJECTS</h2>
          <table>
            <tr>
              <td>
                <a href="https://github.com/KarungiAnna/student-management-system">
                  <img id="one" src={School} alt="School management system" />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/KarungiAnna/web-dev/tree/main/HW3%20part2">
                  <img id="two" src={Guessinggame} alt="Guessing game" />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://docs.google.com/presentation/d/1SL8_kEyhX55VF312ni1T9rAD5Ut8_bT4DbsTY5Ma0oY/edit?usp=sharing">
                  {" "}
                  <img id="three" src={Casestudy} alt=" Food App Case study" />
                </a>
              </td>
            </tr>
          </table>
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
    </>
  );
};

export default Projects;
