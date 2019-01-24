import Layout from "../components/Layout/Layout.js";
import Link from "next/link";
import Head from "next/head";

import "../styles.scss";

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

const Brick = () => (
  <div className="wall">
    <div className="brick">
      <div class="pixels-photo">
        <p>
          <img
            src="https://drscdn.500px.org/photo/228036047/m%3D900/v2?user_id=9643357&webp=true&sig=52dc2f0241948f9b16917788e9101d9a44187aac4716397e0662d1c7aac2e7b2"
            alt="Backside Sand Dunes by Paul Kubala on 500px.com"
          />
        </p>
        <a
          href="https://500px.com/photo/228036047/backside-sand-dunes-by-paul-kubala"
          alt="Backside Sand Dunes by Paul Kubala on 500px.com"
        />
      </div>
      <div className="caption">Southwest Colorado Photojournalism</div>
    </div>
    <div className="brick">
      <div class="pixels-photo">
        <p>
          <img
            src="https://drscdn.500px.org/photo/228036047/m%3D900/v2?user_id=9643357&webp=true&sig=52dc2f0241948f9b16917788e9101d9a44187aac4716397e0662d1c7aac2e7b2"
            alt="Backside Sand Dunes by Paul Kubala on 500px.com"
          />
        </p>
        <a
          href="https://500px.com/photo/228036047/backside-sand-dunes-by-paul-kubala"
          alt="Backside Sand Dunes by Paul Kubala on 500px.com"
        />
      </div>
      <div className="caption">Iceland Photojournalism</div>
    </div>
  </div>
);

export default () => (
  <div>
    <HeadContent />
    <Layout>
      <Brick />
    </Layout>
  </div>
);
