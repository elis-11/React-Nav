import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import Loader from "./components/loader";
//TODO : UODATE MONTAINBG
import mountainBG from "./assets/mountainBg.jpg";

function App() {
  return (
    <Router>
      <div className="App">
        {/* NAV */}
        <Navbar />

        {/* PAGES */}
        {mountainBG ? (
          <Switch>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home mountainBG="{montainBG}" />
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
