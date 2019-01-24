import Menu from "../Menu/Menu";
import "./Layout.scss";

const Layout = props => (
  <div className="layout">
    <Menu />
    <div className="children">{props.children}</div>
  </div>
);

export default Layout;
