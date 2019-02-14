import Link from "next/link";
import Modal from "react-modal";
import "./Brick.scss";

class Brick extends React.Component {
  render() {
    return (
      <Link href={this.props.link}>
        <div className="brick">
          <img src={this.props.source} />
          <div className="overlay" />
          <div className="caption">{this.props.title}</div>
        </div>
      </Link>
    );
  }
}

export default Brick;
