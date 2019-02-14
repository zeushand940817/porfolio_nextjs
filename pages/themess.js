import Layout from "../components/Layout/Layout.js";
import Brick from "../components/Brick/Brick.js";

export default () => (
  <Layout>
    <h2>The Mess</h2>
    <div className="wall detail">
      <div className="col">
        <iframe
          src="https://player.vimeo.com/video/36531214?byline=0&portrait=0"
          width="640"
          height="480"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className="col">
        <p>
          The Mess is a 16mm film exploring Stop Motion Animation with film. The
          film is inspired by Disney's Fantasia and asks the question what
          happens when the mess you clean, cleans you?
        </p>
        <p>
          <span className="bold">tools: </span> 16mm Film. Bolex Camera.
          Stop-Motion Animation. Adobe Premiere.
        </p>
        <p>
          <span className="bold">src: </span>
          <a href="https://vimeo.com/36531214">https://vimeo.com/36531214</a>
        </p>
      </div>
    </div>
  </Layout>
);
