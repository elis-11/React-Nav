import "./scss/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";
import Loader from "./components/loader";
import Footer from "./components/footer";
//TODO : UPDATE MONTAINBG
import mountainBG from "./assets/mountain-bg.jpg";

function App() {
  return (
    <Router>
      <div className="App">
        {/* NAVBAR */}
        <Navbar />
        {/* PAGES */}
        {mountainBG ? (
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home mountainBG={mountainBG} />
            </Route>
          </Switch>
        ) : (
          <Loader />
        )}
        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;