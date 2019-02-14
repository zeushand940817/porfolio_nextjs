import Link from "next/link";
import Modal from "react-modal";
import "./Brick.scss";

class Brick extends React.Component {
  render() {
    return (
      <div className="brick">
        <div
          className="photo"
          style={{
            backgroundImage: `url(${this.props.source})`
          }}
        >
          <div className="pic" />
          <div className="caption">{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default Brick;
