import Brick from "../components/Brick/Brick.js";
import Layout from "../components/Layout/Layout.js";
import Link from "next/link";
import "../styles.scss";

export default () => (
  <div>
    <Layout>
      <div className="content-main">
        <div className="gutter">
          <Brick
            title="The Oblong Adventure"
            source="/static/the_oblong_adventure/detail.png"
            link="/oblongadventure"
          />
          <Brick
            title="openGL Pacman P.O.C."
            source="/static/pacman/pacman.gif"
            link="/pacman"
          />
        </div>
        <div className="gutter">
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
        <div className="gutter">
          <Brick
            title="Southwest Colorado Photojournalism"
            source="/static/sw-colorado/IMG_9838.png"
            link=""
          />
          <Brick
            title="I Remember 16mm Film"
            source="/static/i_remember/Iremember.gif"
            link="/iremember"
          />
        </div>
      </div>
    </Layout>
  </div>
);

//   </div>
// </div>"
