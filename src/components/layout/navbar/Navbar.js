import classes from "./Navbar.module.css"

import { useState } from "react";

// import DartSvg from "../../svg/DartSvg"

import { Link } from "react-router-dom"


function Navbar(props) {
  const [onopen, setOnOpen] = useState(true);

  let root = document.querySelector(':root');


  function handleScoll(){
    var offset = window.pageYOffset || document.documentElement.scrollTop

      if(offset > 88){
        offset = 88;
        setOnOpen(false)
      }

    root.style.setProperty("--navbar-height", (100 - offset) + "vH");
    root.style.setProperty("--title-size", 118 - offset + "px")
    if(offset >= 80){
        root.style.setProperty("--nav-visibility", "1"); 
    }else{
      root.style.setProperty("--nav-visibility", "0"); 
    }
  }

  if(onopen){
    window.addEventListener("scroll",handleScoll);
  }
  if(!onopen){
    console.log("Removed")
    window.removeEventListener("scroll", handleScoll);
  }
 
  return (
    <header className={classes.nav}>
        <ul>
          <li className={classes.navel}>
              <a href='https://github.com/Justinus22/AlgoVis/tree/master' target="_blank" rel="noreferrer" className={classes.gitlink}> My Github </a>
          </li>
          <li className={classes.navel}>
              <Link to="/" className={classes.homepagelink}> Homepage </Link>
          </li>

          <li className={classes.title}>
            <Link to="/" className={classes.titlelink}> Algorithm Visualization </Link>
          </li>
          <li className={classes.navel}>
              <Link to="/Account" className={classes.accountlink}> Account </Link>
          </li>
          <li className={classes.navel}>
              <Link to="/WebsiteDetails" className={classes.detailslink}> Website Details </Link>
          </li>
      </ul>

    </header>
  );
}

export default Navbar;
