import classes from "./Navbar.module.css"

import LogoDoubleDart from "../../svg/LogoDoubleDart.js"
import LogoSingleDart from "../../svg/LogoSingleDart.js"

import { useEffect, useState, useRef} from "react";

import { Link, useLocation } from "react-router-dom"

// import {getDatabase,ref, onValue} from "firebase/database" // for user handle

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

  //animation handling

  const isMobile = useRef();
  const viewportWidth = useRef();

  const location = useLocation();
  const currentLocation = useRef();

  let root = document.querySelector(':root');
  let dropdownMenuCollection = document.getElementsByClassName(classes.dropdown);
  
  const ANIMATIONMULTIPLIER = 1.5;

  const NAVBARSTARTHEIGHT = 12; // final height of navbar in vH
  const NAVBARSTARTHEIGHTHELPER = 100;// startheight of the navbar at page open in vH
  const TITLESIZEHELPER = 112; // 112px is startheight of titleat page open

  const NAVBARENDHEIGHT_START = 50 + "vH"; // Offset of Page during start animation
  const NAVBARENDHEIGHT_END = 15 + "vH"; // Offset of Page after start animation

  const NAVELWIDTH = 15 + "vW"; // final width of the nav elements

  const MAXSCREENFORMOBILEVIEW = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--max-screen-for-mobile").slice(0,-2)); // [px] // the max width in which the site will displayed as a mobile device

  const [logoState, setLogoState] = useState(true) // if logo should be displayed in title or not

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
  const handleScoll = function(){
    
    var offset = window.pageYOffset || document.documentElement.scrollTop

    if(offset > 88 * ANIMATIONMULTIPLIER ){
      offset = 88 * ANIMATIONMULTIPLIER;
      
    }

    if(currentLocation.current === "/" && !isMobile.current && viewportWidth.current > MAXSCREENFORMOBILEVIEW){
      root.style.setProperty("--navbar-start-height", (NAVBARSTARTHEIGHTHELPER- (offset/ANIMATIONMULTIPLIER)) + "vH");
      root.style.setProperty("--title-size", TITLESIZEHELPER - (offset/ANIMATIONMULTIPLIER) + "px")
      root.style.setProperty("--navbar-end-height", NAVBARENDHEIGHT_START);

      if(offset >= 88 * ANIMATIONMULTIPLIER){
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

  const handleDropdown = function(){ // open or closes the dropdown wether its already open or not
    if(viewportWidth.current > MAXSCREENFORMOBILEVIEW) return; // unneccary when thers is no dropdown


    const dropdownMenu = dropdownMenuCollection[0]
    console.log(dropdownMenu.style.display);
    if(!isDropdownOpen){
      dropdownMenu.style.transform = "translateY(0)";

      setIsDropdownOpen(true);
    } else if(isDropdownOpen){
      dropdownMenu.style.transform = "translateY(-150%)";
      setIsDropdownOpen(false)
    }
  }

  const setUpDropdown = function(){
    if(viewportWidth.current > MAXSCREENFORMOBILEVIEW){
      const dropdownMenu = dropdownMenuCollection[0] // if screen is to big -> no drop down
      dropdownMenu.style.display = "none";
    } else {
      const dropdownMenu = dropdownMenuCollection[0] // if screen is not to big -> drop down
      dropdownMenu.style.display = "grid";
    }
  }

  

  useEffect(() => {
    isMobile.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    viewportWidth.current = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    currentLocation.current = window.location.pathname

    setUpDropdown()
    handleScoll()

    window.addEventListener("scroll",handleScoll);

    
    window.addEventListener('resize', function(event){ // updates Ref for dynamic changes 
      viewportWidth.current = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

      handleScoll()
      setUpDropdown(); // sets if dropdown is displayed at all
    });

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 

  useEffect(() => {
    currentLocation.current = window.location.pathname
    console.log(currentLocation.current) // somehow this doesnt work always when this log isnt here....
  }, [location]);
  
  return (
  <div>
  <header className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.navel}>
            <a href='https://github.com/Justinus22/AlgoVis/tree/master' target="_blank" rel="noreferrer" className={classes.gitlink}> My Github </a>
        </li>
        <li className={classes.navel}>
            <Link to="/home" className={classes.homepagelink}> Homepage </Link>
        </li>

        <li>
          <div className={classes.title} onClick={handleDropdown}>
            <div>Algorithm &nbsp;</div>
              {logoState ? 
                <LogoDoubleDart size="30"/> : 
                "V"
              }
            <div>isualization</div>
          </div>
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
    {/* for devices with small screen drowdown menu */}
    <ul className={classes.dropdown}>
      <li className={classes.navel}>
          <a href='https://github.com/Justinus22/AlgoVis/tree/master' target="_blank" rel="noreferrer" className={classes.gitlink}> My Github </a>
      </li>
      <li className={classes.navel}>
          <Link to="/home" className={classes.homepagelink}> Homepage </Link>
      </li>
      <li className={classes.navel}>
          <Link to="/account" className={classes.accountlink}> Account </Link>
      </li>
      <li className={classes.navel}>
          <Link to="/websiteDetails" className={classes.detailslink}> Website Details </Link>
       </li>
    </ul>
  </div>
  );
}

export default Navbar;