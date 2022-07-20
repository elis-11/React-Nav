import { Link } from "react-router-dom";
import "../scss/home.scss";

function Home(props) {
  return (
    <div
      className="home-component"
      style={{ backgroundImage: `url(${props.cityBG})` }}
    >
      <h2>
        Welcome, I design and code beautifully simple things, and I love what I
        do.
      </h2>
      <Link className="call-to-action-contact-link" to="/contact">
        Hire me
      </Link>
    </div>
  );
}

export default Home;
