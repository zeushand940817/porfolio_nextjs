import Link from "next/link";
import "./Menu.scss";

const linkStyle = {
  marginRight: 15
};

const Menu = () => (
  <div className="menu">
    <ul>
      <li>
        <Link href="/">
          <a className="header" style={linkStyle}>
            <span>Work</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a style={linkStyle}>Films</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a style={linkStyle}>Stills</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a style={linkStyle}>Code</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a style={linkStyle}>3D</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a style={linkStyle}>Thoughts</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a style={linkStyle}>Contact</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Menu;
