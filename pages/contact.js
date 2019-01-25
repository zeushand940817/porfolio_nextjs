import Layout from "../components/Layout/Layout.js";

export default () => (
  <Layout>
    <h2>Say Hello.</h2>
    <p>
      Whether its about potential work or you just want to geek out about
      movies, I love to talk.
    </p>
    <form action="https://formspree.io/jp@jpkubala.com" method="POST">
      <label>Name</label>
      <input type="text" name="name" />
      <input type="text" name="name" />
      <textarea type="text" name="name" />
      <input type="submit" value="Submit" />
    </form>
  </Layout>
);
