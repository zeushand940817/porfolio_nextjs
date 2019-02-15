import Layout from "../components/Layout/Layout.js";

export default () => (
  <Layout>
    <h2>Southwest Colorado Photojournalism</h2>
    <div className="content photo">
      <div className="gutter-50">
        <img src="/static/sw-colorado/IMG_9838.png" />
      </div>
      <div className="gutter-50">
        <div className="description">
          <p>Photography. Photojournalism</p>
          <p>
            In 2016 my friend Jacob and I embarked on a 3 day Adventure through
            some of the less known parts of southwestern colorado. The adventure
            included hiking a 14,000ft peak, going to a national park, and
            aligator wrestling.
          </p>
        </div>
      </div>
      <div className="gutter-50">
        <img src="/static/sw-colorado/IMG_9845.png" />
        <img src="/static/sw-colorado/IMG_0224.png" />
        <img src="/static/sw-colorado/IMG_0325.png" />
        <img src="/static/sw-colorado/IMG_9818.png" />
      </div>
      <div className="gutter-50">
        <img src="/static/sw-colorado/IMG_0346.png" />
        <img src="/static/sw-colorado/IMG_0279.png" />
        <img src="/static/sw-colorado/IMG_0184.png" />
      </div>
    </div>
  </Layout>
);
