import Navbar from "./navbar/Navbar"
import OnOpenWrapper from "../wrapper/OnOpenWrapper"

function Layout(props) {
  return (
    <OnOpenWrapper>
      <Navbar />
      {props.children}
    </OnOpenWrapper>
  );
}

export default Layout;
