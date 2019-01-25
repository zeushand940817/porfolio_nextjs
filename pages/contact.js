import Layout from "../components/Layout/Layout.js";

export default () => (
  <Layout>
    <h2>Say Hello.</h2>
    <p>
      Whether its about potential work or you just want to geek out about
      movies, I love to talk.
    </p>
    <form action="https://formspree.io/jp@jpkubala.com" method="POST">
      <input type="text" autofocus="autofocus" placeholder="Name" name="name" />
      <input type="text" name="name" placeholder="Email" />
      <textarea type="text" name="name" placeholder="Message" />
      <input type="submit" value="Submit" />
    </form>
  </Layout>
);
