import Brick from "../components/Brick/Brick.js";
import Layout from "../components/Layout/Layout.js";
import Link from "next/link";
import "../styles.scss";

export default () => (
  <div>
    <Layout>
      <div className="wall">
        <div
          style={{
            width: "60%",
            height: "370px",
            margin: "10px"
          }}
        >
          <Brick
            title="The Oblong Adventure"
            source="/static/the_oblong_adventure/hero.png"
            link="/oblongadventure"
          />
        </div>
        <div
          style={{
            width: "30%",
            height: "360px",
            margin: "10px"
          }}
        >
          <Brick
            title="Tic Tac Toe Game"
            source="/static/tic_tac_toe/hero.png"
            link="/tictactoe"
          />
        </div>
        <div
          style={{
            width: "60%",
            height: "500px",
            margin: "10px"
          }}
        >
          <Brick
            title="Southwest Colorado Photojournalism"
            source="/static/sw-colorado/IMG_9838.png"
            link=""
          />
        </div>
        <div
          style={{
            width: "30%",
            height: "240px",
            margin: "10px"
          }}
        >
          <Brick
            title="openGL Pacman P.O.C."
            source="/static/pacman/pacman.gif"
            link="/pacman"
          />
        </div>
        <div
          style={{
            width: "45%",
            height: "400px",
            margin: "10px"
          }}
        >
          <Brick
            title="The Mess 16mm Film"
            source="/static/the_mess/theMess.gif"
            link="/themess"
          />
        </div>
        <div
          style={{
            width: "45%",
            height: "340px",
            margin: "10px"
          }}
        >
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
