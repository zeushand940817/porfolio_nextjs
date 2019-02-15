import Layout from "../components/Layout/Layout.js";

export default () => (
  <Layout>
    <h2>openGL PacMan</h2>
    <div className="content tech">
      <div className="gutter-50">
        <a href="https://github.com/kubalaj/3DPacman">
          <img className="descrip-img" src="/static/pacman/pacman.gif" />
        </a>
      </div>
      <div className="gutter-50">
        <p>
          This is an Proof of Concept project to recreate the famous pacman
          game. The game is entirly written in C, and openGL. Some of the models
          where made using Maya and then importanted into the application. The
          game also utlizes a built from scrath collision detection algorthim.
        </p>
        <p>
          <span className="bold">tech: </span> C. openGL. Maya. Computer
          Graphics.
        </p>
        <p>
          <span className="bold">code: </span>
          <a href="https://github.com/kubalaj/3DPacman">
            https://github.com/kubalaj/3DPacman
          </a>
        </p>
      </div>
    </div>
  </Layout>
);
