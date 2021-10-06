import { Link } from "react-router-dom";
import "../css/home.css";

function Home(props) {
  return (
    <div
      className="page-component home-component"
      style={{ backgroundImage: `url(${props.mountainBG})` }}
    >
      <h2>React Router Dom</h2>
      <Link className="call-to-action-contact-link" to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Home;
