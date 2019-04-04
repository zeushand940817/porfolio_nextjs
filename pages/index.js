import Brick from "../components/Brick/Brick.js";
import Layout from "../components/Layout/Layout.js";
import Link from "next/link";
import "../styles.scss";

export default () => (
  <div>
    <div className="welcome">
      <h1>J Paul Kubala</h1>
      <h2>creative.</h2>
      <h2>technolighist.</h2>
      <h2>story teller.</h2>
    </div>
    <Layout>
      <div className="content">
        <div className="gutter-33">
          <Brick title="Piano" source="/static/piano/piano.png" link="/piano" />
          <Brick
            title="The Oblong Adventure"
            source="/static/the_oblong_adventure/detail.png"
            link="/oblongadventure"
          />
          <Brick
            title="openGL Pacman P.O.C."
            source="/static/pacman/hero.png"
            link="/pacman"
          />
        </div>
        <div className="gutter-33">
          <Brick
            title="Tic Tac Toe Game"
            source="/static/tic_tac_toe/hero.png"
            link="/tictactoe"
          />
          <Brick
            title="The Mess 16mm Film"
            source="/static/the_mess/theMess.gif"
            link="/themess"
          />
        </div>
        <div className="gutter-33">
          <Brick
            title="Southwest Colorado Photojournalism"
            source="/static/sw-colorado/IMG_9838.png"
            link="/swcolorado"
          />
          <Brick
            title="I Remember 16mm Film"
            source="/static/i_remember/hero.png"
            link="/iremember"
          />
        </div>
      </div>
    </Layout>
  </div>
);
