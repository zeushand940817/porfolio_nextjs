import Layout from "../components/Layout/Layout.js";
import Brick from "../components/Brick/Brick.js";

export default () => (
  <Layout>
    <h2>I Remember</h2>
    <div className="wall detail">
      <div className="col">
        <iframe
          src="https://player.vimeo.com/video/32404666"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        />
        <p>
          <a href="https://vimeo.com/32404666">I Remember</a>
          <a href="https://vimeo.com/jpkubala">J Paul Kubala</a>
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
      </div>
      <div className="col">
        <p>
          I Remember, is an experimental 16mm movie shot on a Bolex camera. The
          purpose of the project was to try to implement as many in camera
          effects with film as I could. You will see demonstration of split
          screens, super impositions, dissolve transitions, slow motion and
          overcranking. Film was then converted to digital for editing.
        </p>
        <p>
          <span className="bold">tools: </span> 16mm Film. Bolex Camera. Adobe
          Premiere.
        </p>
        <p>
          <span className="bold">src: </span>
          <a href="https://vimeo.com/32404666">https://vimeo.com/32404666</a>
        </p>
      </div>
    </div>
  </Layout>
);
