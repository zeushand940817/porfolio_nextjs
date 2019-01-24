import Link from "next/link";
import "./Header.scss";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="menu">
    <Link href="/">
      <a className="header" style={linkStyle}>
        Work
      </a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Films</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Stills</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Code</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>3D</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Thoughts</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Header;
