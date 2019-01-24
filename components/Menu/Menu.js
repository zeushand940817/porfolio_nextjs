import Link from "next/link";
import "./Menu.scss";

const linkStyle = {
  marginRight: 15
};

const Menu = () => (
  <div className="menu">
    <h1>JP Kubala</h1>
    <ul>
      <li>
        <Link href="/">
          <a>
            <span>Work</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <span>Films</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <span>Stills</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <span>Code</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <span>3D</span>
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
  </div>
);

export default Menu;
