import Layout from "../components/Layout/Layout.js";
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>JP Kubala</title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      />
    </Head>

    <Layout>
      <div className="contact">
        <h2>Say Hello.</h2>
        <div className="row">
          <div className="col col-25">
            <p>
              Whether its about potential work or you just want to geek out
              about movies, I love to talk. Feel free to contact me on my form
              or send me an email any time.
            </p>
            <p>
              <i class="fas fa-mobile-alt" /> 303-919-5398 <br />
              <i class="far fa-envelope" /> jp@jpkubala.
              <br />
              <i class="fas fa-map-marked-alt" /> Portland, OR. 97210 <br />
            </p>
          </div>
          <div className="col">
            <form action="https://formspree.io/jp@jpkubala.com" method="POST">
              <input
                type="text"
                autofocus="autofocus"
                placeholder="Name"
                name="name"
              />
              <input type="text" name="name" placeholder="Email" />
              <textarea type="text" name="name" placeholder="Message" />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);
