import Layout from "../components/Layout/Layout.js";

export default () => (
  <Layout>
    <h2>Tic Tac Toe</h2>
    <div className="wall detail">
      <div className="col">
        <a href="https://tictactoe-220903.firebaseapp.com/">
          <img
            className="descrip-img"
            src="/static/tic_tac_toe/tictactoe.gif"
          />
        </a>
      </div>
      <div className="col">
        <p>
          This is a Tic Tac Toe program written with a React Front End and a
          Flask Api. The application was an exploration in implementing the Min
          Max Algorthim in a web application. The application utlizes a React
          Single Page Application with a Restful Flask API. The Backend is a
          little slow with no current feedback to the user that the request has
          been made, so when playing the game be patient for the computer to
          make a move.
        </p>
        <p>
          <span className="bold">tech: </span> React. SCSS. Flask. MinMax
          Algorthim. Single Page Application.
        </p>
        <p>
          <span className="bold">src: </span>
          <a href="https://tictactoe-220903.firebaseapp.com/">
            https://tictactoe-220903.firebaseapp.com/
          </a>
        </p>
        <p>
          <span className="bold">code(F.E.): </span>
          <a href="https://github.com/kubalaj/tictactoe">
            https://github.com/kubalaj/tictactoe
          </a>
        </p>
        <p>
          <span className="bold">code(B.E.): </span>
          <a href="https://github.com/kubalaj/tictactoecomputer">
            https://github.com/kubalaj/tictactoecomputer
          </a>
        </p>
      </div>
    </div>
  </Layout>
);
