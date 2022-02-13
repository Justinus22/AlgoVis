import React, { useEffect, useRef } from "react";

import useWindowSize from "../../hooks/useWindowSize";


function SmoothScroll(props){

    const scrollingContainerRef = useRef();
    const windowSize = useWindowSize();

    const data = {
      ease: 0.1,
      current: 0,
      previous: 0,
      rounded: 0,
    };

  useEffect(() => {
      setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
  document.body.style.height = `${
    scrollingContainerRef.current.getBoundingClientRect().height
  }px`;
  };



  // useEffect(() => {
  //     requestAnimationFrame(() => smoothScrollHandler());
  // }, []);


  var smoothScrollHandler = function(){
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    // scrollingContainerRef.current.style.transform = `translateY(${data.previous}px)`;

    requestAnimationFrame(() => smoothScrollHandler());
  }

  var handleScroll = function(e) {
    e.preventDefault();

   
    smoothScrollHandler();
  };

  var SmoothScrolling = function(){
    window.addEventListener('mousewheel', (e) => handleScroll(e), {passive: false});
    // window.addEventListener('touchmove', handleEvent, {passive: false});
    // window.addEventListener('scroll', handleEvent, {passive: false});
  }

  SmoothScrolling();


  return (
      <div ref={scrollingContainerRef}>
          {props.children}
      </div>
  );
}

export default SmoothScroll;
