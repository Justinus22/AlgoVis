import Navbar from "./navbar/Navbar"
import classes from "./Layout.module.css"


function Layout(props) {
  return (
    <div>
        <Navbar />
        <div className={classes.content}>
          {props.children}
        </div>
        
    </div>
  );
}

export default Layout;
