import Menu from "../Menu/Menu";
import "./Layout.scss";

const Layout = props => (
  <div className="layout">
    <Menu />
    {props.children}
  </div>
);

export default Layout;
