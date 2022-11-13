import Navbar from "./navbar/Navbar"
import Cursor from "./curosr/cursor";

import classes from "./Layout.module.css"


function Layout(props) {
  return (
    <div>
        <Navbar />
        <div className={classes.content}>
          {props.children}
        </div>
        <Cursor />
    </div>
  );
}

export default Layout;
