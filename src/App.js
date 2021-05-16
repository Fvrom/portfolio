import { Route, BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import profile from "./assets/profile.jpg";
import "./App.css";
import Card from "./components/Card";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Game from "./assets/game-mockup.png";
import Drink from "./assets/drink-mockup.png";
import Event from "./assets/event-mockup.png";
import anime from "animejs/lib/anime.es.js";

function App() {
  const image = useRef();
  useEffect(() => {
    anime({
      targets: image.current,
      translateY: [-500, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 700,
    });
  }, []);
  return (
    <>
      <div className="App">
        <div className="Container">
          <Router>
            <Route path="/">
              <img ref={image} src={profile} className="image" alt="profile" />
            </Route>
          </Router>
          <Card></Card>
        </div>
      </div>
      <div className="Projects">
        <h4>Projects.</h4>
        <Project
          id="projects"
          image={Event}
          title="Eventinbjudan"
          description="A project together with the class of IP Grafisk produktion & form. My role in the project was to build the website using the design provided by IP. "
          url="https://github.com/Fvrom/Event-assignment"
          link="Github repository"
        ></Project>
        <Project
          image={Game}
          title="Game application"
          description="A React project built with a classmate. Lets you look at games coming out, best rated games and search for games."
          url="https://github.com/Fvrom/Game-app---React"
          link="Github repository"
        ></Project>
        <Project
          image={Drink}
          title="Drink App"
          description="Built with a classmate. A cocktail app in Laravel which lets you search for and save your favorite drink recipes."
          url="https://github.com/Fvrom/Drink-app"
          link="Github repository"
        ></Project>
      </div>
      <Footer> </Footer>
    </>
  );
}

export default App;
