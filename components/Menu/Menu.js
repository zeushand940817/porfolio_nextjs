import Link from "next/link";
import "./Menu.scss";
import Head from "next/head";

const HeadContent = () => (
  <Head>
    <title>JP Kubala</title>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossorigin="anonymous"
    />
  </Head>
);

const Menu = () => (
  <div className="menu">
    <HeadContent />
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
