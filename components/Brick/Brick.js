import Link from "next/link";
import Modal from "react-modal";
import "./Brick.scss";

class Brick extends React.Component {
  render() {
    return (
      <Link href={this.props.link}>
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
      </Link>
    );
  }
}

export default Brick;
