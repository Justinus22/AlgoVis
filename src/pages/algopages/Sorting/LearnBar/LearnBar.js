import classes from "./LearnBar.module.css";
import arraygetter from "../SortingStyle.module.css"

import LogoSingleDart from "../../../../components/svg/LogoSingleDart";
import { useEffect, useState } from "react";

import { resetBarColor } from "../animation.js"

function LearnBar(props){
    const [position, setPosition]  = useState(0);

    const sort = props.sort[0]
    const sortlen = sort.length;

    const bars = document.getElementsByClassName(arraygetter.arraybar)
    const container = document.getElementsByClassName(classes.textcontainer);

    const animation_color = window.getComputedStyle(document.documentElement).getPropertyValue("--animation-color")
    const standard_color = window.getComputedStyle(document.documentElement).getPropertyValue("--firstColor")
        
    const updateBars = function(pos){

        if(pos > sortlen - 1){
            pos = sortlen - 1;
        }
        resetBarColor(standard_color);
        
        let firstBar = bars[sort[pos].animation[0]].style;
        let secondBar = bars[sort[pos].animation[1]].style;
        let value = `${sort[pos].value}px`

        if(sort[pos].state === "swap"){ 

            let temp = firstBar.height;
            firstBar.height = secondBar.height;
            secondBar.height = temp;      

        } else if(sort[pos].state === "compare"){
                
            firstBar.backgroundColor = animation_color;
            secondBar.backgroundColor = animation_color;
          
        }else if(sort[pos].state === "set"){ 

                firstBar.height = value;
                
        }
    }

    const updateTextContainer = function(pos){
        if(pos > sortlen - 1){
            pos = sortlen - 1;
            container.item(0).textContent = "Finished!"
        } else if(container.item(0)){
            if(sort[pos].state === "compare"){
                container.item(0).textContent = "Compare value of elements " + sort[pos].animation[0] + " and " + sort[pos].animation[1] +"."
            } else if (sort[pos].state === "swap") {
                container.item(0).textContent = "Swap value of elements " + sort[pos].animation[0] + " and " + sort[pos].animation[1] +"."
            }
            else if (sort[pos].state === "set") {
                container.item(0).textContent = "Set element " + sort[pos].animation[0] + " to value " + sort[pos].value +".";
            }             
        }
    }

    const nextPosition = function(){
        setPosition(position + 1);  
    }
    const prePosition = function(){
        setPosition(position - 1);
    }
 
   
    useEffect(() => {
        setPosition(0);
    },[]);

    useEffect(() => {
        updateBars(position);
        updateTextContainer(position);
        props.setcount(position + 1)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position]);

    return (
        <div className={classes.outer}>
            <div onClick={position < 1 ? nextPosition : prePosition}
                className={(position < 1 ? classes.right : classes.left) + " " +  classes.dartdiv}>
                    <LogoSingleDart size={"5vW"} className={classes.dart}/>
            </div>
            <div className={classes.outertextcontainer}>
                <p className={classes.numeration}>
                    {position + 1 + "."}
                </p> 
                <div className={classes.textcontainer}></div>
            </div>
            <div onClick={position > sortlen - 1 ? prePosition : nextPosition}
             className={(position > sortlen - 1 ? classes.left : classes.right)  + " " + classes.dartdiv}>
                <LogoSingleDart size={"5vW"} />
            </div>
        </div>
    );
}

export default LearnBar