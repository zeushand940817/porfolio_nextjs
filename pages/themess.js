import Layout from "../components/Layout/Layout.js";
import Brick from "../components/Brick/Brick.js";

export default () => (
  <Layout>
    <h2>The Mess</h2>
    <div className="content video">
      <div className="gutter-50">
        <iframe
          src="https://player.vimeo.com/video/36531214?byline=0&portrait=0"
          width="100%"
          height="420"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className="gutter-50">
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
