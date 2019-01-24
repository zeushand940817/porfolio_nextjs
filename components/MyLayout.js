import Menu from "./Menu/Menu";

const Layout = props => (
  <div>
    <Menu />
    {props.children}
  </div>
);

export default Layout;
