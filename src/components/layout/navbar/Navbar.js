import classes from "./Navbar.module.css"

// import $ from 'jquery';

// import DartSvg from "../../svg/DartSvg"

// import { useEffect } from "react";

import { Link } from "react-router-dom"

function Navbar(props) {

  let root = document.querySelector(':root');
  
  
  // const [onOpen, setOnOpen] = useState(true);

  const animationMultiplier = 1.5;


  const handleScoll = function(){
    var currentLocation = window.location.pathname;
    // console.log(currentLocation)
    if(currentLocation === "/" || currentLocation === "/home"){
      var offset = window.pageYOffset || document.documentElement.scrollTop
      if(offset > 88 * animationMultiplier){
        offset = 88 * animationMultiplier;
      }

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
      // }
    } else {
      root.style.setProperty("--navbar-start-height", 12 + "vH");
      root.style.setProperty("--title-size", 24 + "px")
      root.style.setProperty("--nav-size", "15vW");
      root.style.setProperty("--nav-visibility", "1");  
    }
  }

  // function scrollSmoothTo(y) {
  //   $('html, body').animate({
  //     scrollTop: y
  //   }, 500);
  // }

  const handelFirstScroll = function(e){

    // var offset = window.pageYOffset || document.documentElement.scrollTop
    // if(offset < 90* animationMultiplier){
    //   e.preventDefault();
    //   scrollSmoothTo(90*animationMultiplier)
    //   console.log(1)
    // }else if(offset - e.wheelDeltaY < 90*animationMultiplier){
    //   e.preventDefault();  
    //   scrollSmoothTo(0)
    //   console.log(2)
    // }
    // else{
    //   scrollSmoothTo(offset + (e.wheelDeltaY * -animationMultiplier))
    //   console.log(3)
    // }
  }
    
  window.addEventListener("scroll",handleScoll);
  window.addEventListener("wheel", (e) => handelFirstScroll(e), {passive: false});



  
  
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
          <Link to="/home" className={classes.titlelink}> Algorithm Visualization </Link>
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
