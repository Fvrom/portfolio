import React, { useEffect, useRef } from "react";
import "./card.css";
import "./nav.css";

import { Link } from "react-scroll";
import anime from "animejs/lib/anime.es.js";

const Card = (props) => {
  const card = useRef();
  useEffect(() => {
    anime({
      targets: card.current,
      translateY: [-500, 0],
      opacity: [0, 1],
      easing: "easeInOutExpo",
    });
  }, []);

  return (
    <div ref={card} className="card">
      <h2> Portfolio </h2>
      <h3> Ida From.</h3>
      <p>
        I’m a non-binary nerd who is studying fullstack web development at Yrgo.
      </p>
      <p>
        I’ve previously worked in the service industry but have found my home in
        coding for the web. Beside programming I enjoy walks, cuddling cats and
        playing games from time to time.
      </p>
      <nav>
        <ul>
          <li>
            <Link className="Link" to="projects" smooth offset={-80}>
              Projects
            </Link>
          </li>
          <li>
            <a className="Link" href="mailto:from.ida@hotmail.com">
              Contact
            </a>
          </li>
          <li>
            <a className="Link" href="https://github.com/Fvrom">
              Github
            </a>
          </li>
          <li>
            <a className="Link" href="https://www.linkedin.com/in/ida-from/">
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Card;
