import Link from "next/link";
import "./Menu.scss";

const linkStyle = {
  marginRight: 15
};

const Menu = () => (
  <div className="menu">
    <Link href="/">
      <a>
        <h1>JP Kubala</h1>
      </a>
    </Link>
    <ul className="nav">
      <li>
        <Link href="/">
          <a>
            <span>Work</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>
            <span>About</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/thoughts">
          <a>
            <span>Thoughts</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>
            <span>Contact</span>
          </a>
        </Link>
      </li>
    </ul>
    <ul className="social">
      <a href="https://github.com/kubalaj">
        <li>
          <i className="fab fa-github" />
        </li>
      </a>
      <a href="https://500px.com/paul_danger_kub">
        <li>
          <i className="fab fa-500px" />
        </li>
      </a>
      <a href="https://vimeo.com/jpkubala">
        <li>
          <i className="fab fa-vimeo-v" />
        </li>
      </a>
      <a href="https://www.linkedin.com/in/jpkubala/">
        <li>
          <i className="fab fa-linkedin-in" />
        </li>
      </a>
      <a href="https://www.instagram.com/paul_danger_kub/">
        <li>
          <i className="fab fa-instagram" />
        </li>
      </a>
    </ul>
  </div>
);

export default Menu;
