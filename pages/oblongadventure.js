import Layout from "../components/Layout/Layout.js";
import Brick from "../components/Brick/Brick.js";

export default () => (
  <Layout>
    <h2>The Oblong Adventure</h2>
    <div className="wall detail">
      <div className="col">
        <a href="https://www.theoblongadventure.com/">
          <img src="/static/the_oblong_adventure/detail.png" />
        </a>
      </div>
      <div className="col">
        <p>
          The Oblong Adventure is a blog created with React, Gatsby and SCSS. It
          is a blog to display and showcase my passion for the outdoors. The
          purpose of the blog is to house different Photojournalism, Video Work,
          Trip Reports, Gear Reviews and many more of the creativity and journy
          that the outdoors provides to me. It was also an exploration with the
          static site generator Gatsby. There is ongoing experimentation and
          exploration into the design and trying to relate places with stories
          with D3 and other vizualizations.
        </p>
        <p>
          <span className="bold">tech: </span> React. SCSS. Gatsby.
        </p>
        <p>
          <span className="bold">src: </span>
          <a href="https://www.theoblongadventure.com/">
            https://www.theoblongadventure.com/
          </a>
        </p>
        <p>
          <span className="bold">code: </span>
          <a href="https://github.com/kubalaj/oblong_adventure">
            https://github.com/kubalaj/oblong_adventure
          </a>
        </p>
      </div>
    </div>
  </Layout>
);
