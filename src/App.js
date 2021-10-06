import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import Loader from "./components/loader";
import mountainBG from "./assets/mountain-bg.jpg";
//TODO : UPDATE MONTAINBG

function App() {
  return (
    <Router>
      <div className="App">
        {/* NAV */}
        <Navbar />

        {/* PAGES */}
        {mountainBG ? (
          <Switch>
            <Route path="/projects">
              Projects
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home mountainBG={mountainBG} />
            </Route>
          </Switch>
        ) : (
          <Loader />
        )}
      </div>
    </Router>
  );
}

export default App;
