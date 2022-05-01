import { Route, BrowserRouter as Router } from "react-router-dom";
import profile from "./assets/profile.jpg";
import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Game from "./assets/game-mockup.png";
import Drink from "./assets/drink-mockup.png";
import Event from "./assets/event-mockup.png";
import Towerfall from "./assets/Towerfall(1).png";
import Work from "./assets/work.jpg";

function App() {
  return (
    <>
      <div className="App">
        <div className="Container">
          <Router>
            <Route path="/">
              <Profile profile={profile}> </Profile>
            </Route>
          </Router>
          <Card></Card>
        </div>
      </div>
      <div className="Projects">
        <h4>Projects.</h4>
        <Project
          id="projects"
          image={Work}
          title="Work in progress"
          description="Currently building the website for a small event business. Using Wordpress Gutenberg"
        ></Project>
        <Project
          id="projects"
          image={Drink}
          title="Drink App"
          description=" A cocktail app in Laravel which lets you search for and save your favorite drink recipes."
          url="https://github.com/Fvrom/Drink-app"
          link="Github repository"
        ></Project>
        <Project
          image={Event}
          title="Eventinbjudan"
          description="A project together with the class of IP Grafisk produktion & form. My role in the project was to build the website using the design provided by IP. "
          url="https://github.com/Fvrom/Event-assignment"
          link="Github repository"
        ></Project>
        <Project
          image={Game}
          title="Games"
          description="School project in React. See games that are coming out, see best rated games and search for games."
          url="https://github.com/Fvrom/Game-app---React"
          link="Github repository"
        ></Project>
        <Project
          image={Towerfall}
          title="Towerfall Game"
          description="In progress. The assignment was to create a game or an experience using Javascript and utilizing a WebGL framework. We chose to work with Phaser 3 and to create our version of Towerfall Ascension."
          url="https://github.com/carolinahagman/Level-Up"
          link="Github repository"
        ></Project>
      </div>
      <Footer> </Footer>
    </>
  );
}

export default App;
