import Header from "./Header/Header";

const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
