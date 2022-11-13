import classes from "./cursor.module.css"

import LogoSingleDart from "../../svg/LogoSingleDart";


import { useEffect } from "react"

function Cursor(props){

    document.documentElement.style.cursor = 'none'

    const root = document.querySelector(':root');

    const standard_color = window.getComputedStyle(document.documentElement).getPropertyValue("--firstColor")

    const cursorSize = 30;


    const clickCursor = (e) => {

    }
    const setCursor = (e) => {
        const mousePosX = e.clientX;
        const mousePosY = e.clientY;

        console.log(e.clientY)
 
        root.style.setProperty("--cursor-x", mousePosX + "px")
        root.style.setProperty("--cursor-y", mousePosY + "px")
    }


    // let lastOffsetY = window.pageYOffset;
    // let timeout = null; // for debouncing

    // const scrollCursor = (e) => {

    //     clearTimeout(timeout)

    //     timeout = setTimeout(() => {

    //         const cursor = document.getElementsByClassName(classes.cursor)[0]
            
    //         const currentOffsetY = parseInt(window.pageYOffset)
    //         const cursorPosY = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--cursor-y").slice(0,-2))
    //         const newPosY = cursorPosY + currentOffsetY - lastOffsetY
    //         lastOffsetY = currentOffsetY

    //         cursor.animate([{
    //             top: cursorPosY + "px"
    //         },{
    //             top: newPosY + "px"
    //         }],{
    //             delay: 500
    //         });


    //         console.log(cursor.animate([{
    //             top: cursorPosY + "px"
    //         },{
    //             top: newPosY + "px"
    //         }],{
    //             delay: 500
    //         }))
    //     },200)


    // above problem got fixed by just pos the cursor fixed and not absolute

    // document.addEventListener("scroll", scrollCursor)
        
    // }

    useEffect(() => {
        root.style.setProperty("--cursor-y", cursorSize + "px")

        document.addEventListener("mousemove", setCursor)
        
    }, []);
    

    return (
        <div className={classes.cursor}>
            <div  className={classes.innerdart}>
                <LogoSingleDart size={(cursorSize - 10) + "px"} className={classes.innerdart}/>
            </div>
            <div  className={classes.outerdart}>
                <LogoSingleDart size={cursorSize + "px"} color={standard_color }/>
            </div>
        </div>
    );
}

export default Cursor;