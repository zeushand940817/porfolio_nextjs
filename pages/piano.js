import Layout from "../components/Layout/Layout.js";
import Brick from "../components/Brick/Brick.js";

export default () => (
  <Layout>
    <h2>Piano</h2>
    <div className="content tech">
      <div className="gutter-50">
        <img src="/static/piano/piano.png" />
      </div>
      <div className="gutter-50 description">
        <p>
          Piano is a 3D model made with Maya 2018 and Arnold. The maya was made
          by using a combination of using polygon and nurbs modeling techniques.
        </p>
        <p>
          <span className="bold">tech: </span> Maya. Arnold.
        </p>
      </div>
    </div>
  </Layout>
);
