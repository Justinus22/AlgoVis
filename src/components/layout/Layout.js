import Navbar from "./navbar/Navbar"

function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;
