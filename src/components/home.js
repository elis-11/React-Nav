import { Link } from "react-router-dom";
import "../css/nav.css";

function Home(props) {
  return (
    <div
      className="page-component home-component"
      style={{ backgroundImage: `url(${props.mountainBG})` }}
    >
      <h2>React Router</h2>
      <Link className="call-to-action-contact-link" to="/contact">
        Here me
      </Link>
    </div>
  );
}

export default Home;
