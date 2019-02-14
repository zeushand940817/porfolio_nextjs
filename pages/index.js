import Brick from "../components/Brick/Brick.js";
import Layout from "../components/Layout/Layout.js";
import Link from "next/link";
import "../styles.scss";

export default () => (
  <div>
    <Layout>
      <div className="wall">
        <Link href="/oblongadventure">
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
            />
          </div>
        </Link>
        <Link href="/tictactoe">
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
            />
          </div>
        </Link>
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
          />
        </div>
        <Link href="/pacman">
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
            />
          </div>
        </Link>
        <Link href="/themess">
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
            />
          </div>
        </Link>
        <Link href="/iremember">
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
            />
          </div>
        </Link>
      </div>
    </Layout>
  </div>
);
