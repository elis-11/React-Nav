import "../scss/footer.scss";

function Footer() {
  return (
    //TO DO UPDATE POSITION
    <footer className="footer-component">
      <ul>
      <li>
          <a
            href="mailto:eliza.arzanukaeva@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope" aria-hidden="true"></i>
            {/* src="https://img.icons8.com/fluency/48/000000/important-mail.png" */}
          </a>
        </li>
        <li>
          <a
            href="https://github.com/elis-11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-stack-overflow" aria-hidden="true"></i>
            {/* src="https://img.icons8.com/color/45/000000/stackoverflow.png" */}
          </a>
        </li>
        <li>
          <a
            href="https://github.com/elis-11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
            {/* src="https://img.icons8.com/nolan/46/github.png" */}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/eliza-arzanukaeva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            {/* src="https://img.icons8.com/offices/40/000000/linkedin.png" */}
          </a>
        </li>
        <li>
          <a
            href="https://github.com/elis-11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
            {/* src="https://img.icons8.com/officexs/40/000000/whatsapp.png" */}
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
            {/* src="https://img.icons8.com/office/40/000000/facebook.png" */}
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
