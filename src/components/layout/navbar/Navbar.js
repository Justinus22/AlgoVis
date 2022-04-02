import classes from "./Navbar.module.css"

import LogoDoubleDart from "../../svg/LogoDoubleDart.js"
import LogoSingleDart from "../../svg/LogoSingleDart.js"

import { useEffect, useState } from "react";

import { Link } from "react-router-dom"

function Navbar(props) {

  let root = document.querySelector(':root');
  
  const animationMultiplier = 1.5;

  const [logoState, setLogoState] = useState(true)


  const handleScoll = function(){
    var currentLocation = window.location.pathname;
    var offset = window.pageYOffset || document.documentElement.scrollTop

    if(offset > 88 * animationMultiplier ){
      offset = 88 * animationMultiplier;
      setLogoState(true);
    } else if(currentLocation === "/") {
      setLogoState(false);
    }

    if(currentLocation === "/"){
      root.style.setProperty("--navbar-start-height", (100 - (offset/animationMultiplier)) + "vH");
      root.style.setProperty("--title-size", 112 - (offset/animationMultiplier) + "px")

      if(offset >= 85 * animationMultiplier){
          root.style.setProperty("--nav-visibility", "1");       
      }else{
        root.style.setProperty("--nav-visibility", "0"); 
      }

      if( offset >= 75 * animationMultiplier){
        root.style.setProperty("--nav-size", "15vW"); 
      } else {
        root.style.setProperty("--nav-size", "0vW"); 
      }

      if (offset >= 55 * animationMultiplier){
        root.style.setProperty("--logo-animation-display-mode", "none")
      } else {
        root.style.setProperty("--logo-animation-display-mode", "grid")
      }

    } else {
      root.style.setProperty("--navbar-start-height", 12 + "vH");
      root.style.setProperty("--title-size", 24 + "px");
      root.style.setProperty("--nav-size", "15vW");
      root.style.setProperty("--nav-visibility", "1");
      root.style.setProperty("--logo-animation-display-mode", "none")
    }

  }

   
  useEffect(() => {
    handleScoll()
    window.addEventListener("scroll",handleScoll);
  },[]);
  
  console.log(logoState)
  
  return (
  <header className={classes.nav}>
      <ul>
        <li className={classes.navel}>
            <a href='https://github.com/Justinus22/AlgoVis/tree/master' target="_blank" rel="noreferrer" className={classes.gitlink}> My Github </a>
        </li>
        <li className={classes.navel}>
            <Link to="/home" className={classes.homepagelink}> Homepage </Link>
        </li>

        <li className={classes.title}>
          <Link to="/home" className={classes.titlelink}> 
            <div>Algorithm &nbsp;</div>
              {logoState ? 
                <LogoDoubleDart size="30"/> : 
                "V"
              }
            <div>isualization</div>
           </Link>
        </li>
        <li className={classes.navel}>
            <Link to="/Account" className={classes.accountlink}> Account </Link>
        </li>
        <li className={classes.navel}>
            <Link to="/WebsiteDetails" className={classes.detailslink}> Website Details </Link>
        </li>
    </ul>
    <div className={classes.logoanimationdiv}>
      <div className={classes.firstdart}><LogoSingleDart size="100" /></div>
      <div className={classes.seconddart}><LogoSingleDart size="100"/></div>
    </div>
  </header>
  );
}

export default Navbar;