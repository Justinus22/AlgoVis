import classes from "./Navbar.module.css"

import LogoDoubleDart from "../../svg/LogoDoubleDart.js"
import LogoSingleDart from "../../svg/LogoSingleDart.js"

import { useEffect, useState, useRef} from "react";

import { Link } from "react-router-dom"

// import {getDatabase,ref, onValue} from "firebase/database"

function Navbar(props) {

  //user handeling

  // const {currentUser} = useContext(AuthContext);

  // const [username, setUsername] = useState();
  
  // const getUsername = function(user, db){
  //     const usernameRef = ref(db, "users/" + user.uid +"/username");
       
  //     onValue(usernameRef, (DataSnapshot) => {
  //         const data = DataSnapshot.val();
  //         setUsername(data)
  //     })

  // }

  //animation handeling

  const isMobile = useRef();

  let root = document.querySelector(':root');
  
  const ANIMATIONMULTIPLIER = 1.5;

  const NAVBARSTARTHEIGHT = 12; // final height of navbar in vH
  const NAVBARSTARTHEIGHTHELPER = 100;// startheight of the navbar at page open in vH
  const TITLESIZEHELPER = 112; // 112px is startheight of titleat page open

  const NAVBARENDHEIGHT_START = 50 + "vH"; // Offset of Page during start animation
  const NAVBARENDHEIGHT_END = 15 + "vH"; // Offset of Page after start animation

  const NAVELWIDTH = 15 + "vW"; // final width of the nav elements

  const [logoState, setLogoState] = useState(true) // if logo should be displayed in title or not


  const handleScoll = function(){
    var currentLocation = window.location.pathname;
    var offset = window.pageYOffset || document.documentElement.scrollTop

    if(offset > 88 * ANIMATIONMULTIPLIER ){
      offset = 88 * ANIMATIONMULTIPLIER;
      
    }

    if(currentLocation === "/" && !isMobile.current){
      root.style.setProperty("--navbar-start-height", (NAVBARSTARTHEIGHTHELPER- (offset/ANIMATIONMULTIPLIER)) + "vH");
      root.style.setProperty("--title-size", TITLESIZEHELPER - (offset/ANIMATIONMULTIPLIER) + "px")
      root.style.setProperty("--navbar-end-height", NAVBARENDHEIGHT_START);

      if(offset >= 85 * ANIMATIONMULTIPLIER){
          root.style.setProperty("--nav-visibility", "1");  
          setLogoState(true);     
      }else{
        root.style.setProperty("--nav-visibility", "0");
        setLogoState(false);
      }

      if( offset >= 75 * ANIMATIONMULTIPLIER){
        root.style.setProperty("--navel-width", NAVELWIDTH); 
      } else {
        root.style.setProperty("--navel-width", "0vW"); 
      }

      if (offset >= 55 * ANIMATIONMULTIPLIER){
        root.style.setProperty("--logo-animation-display-mode", "none")
        
      } else {
        root.style.setProperty("--logo-animation-display-mode", "grid")
        
      }

    } else {
      root.style.setProperty("--navbar-start-height", NAVBARSTARTHEIGHT + "vH");
      root.style.setProperty("--title-size", 24 + "px");
      root.style.setProperty("--navel-width", NAVELWIDTH);
      root.style.setProperty("--nav-visibility", "1");
      root.style.setProperty("--logo-animation-display-mode", "none")
      root.style.setProperty("--navbar-end-height", NAVBARENDHEIGHT_END);
    }

  }

   
  useEffect(() => {
    isMobile.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    handleScoll()
    window.addEventListener("scroll",handleScoll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
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
            <Link to="/account" className={classes.accountlink}> Account </Link>
        </li>
        <li className={classes.navel}>
            <Link to="/websiteDetails" className={classes.detailslink}> Website Details </Link>
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