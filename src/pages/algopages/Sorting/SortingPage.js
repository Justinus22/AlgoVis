import classes from "./SortingStyle.module.css"

import doAnimations, {resetArray, resetBarColor, clearAllTimeouts, MAX_SPEED} from "./animation.js";

import { useState, useEffect } from "react"

function SortingPage(props){


    const [array, setArray] = useState([])
    const [size, setSize] = useState(50);
    const [speed, setSpeed] = useState(10);

    const [inSort, setInSort] = useState(false);

    const root = document.querySelector(':root');
    const animation_color = window.getComputedStyle(document.documentElement).getPropertyValue("--animation-color")
    const standard_color = window.getComputedStyle(document.documentElement).getPropertyValue("--firstColor")

    useEffect(() => {
        resetArray(size,root, standard_color, setArray, setInSort)
    },[]);
   

    let arr_size_element = document.querySelector("#size")
    if(arr_size_element){
        arr_size_element.addEventListener("input", () => {
            setSize(arr_size_element.value); 
            // appendToArray(size - array.length);
        });
    }

    let animation_speed_element = document.querySelector("#speed");
    if(animation_speed_element){
        animation_speed_element.addEventListener("input", () => {
            setSpeed(animation_speed_element.value);
        })
    }

   
    return (
        <div className={classes.outer}>
            <p className={classes.title}>{props.title}</p>
            <div className={classes.selectbar}>
                <div className={classes.innerselectbar}>
                    <div className={[classes.selectellement]}>
                        {inSort ? 
                        <button className={classes.btn} onClick={()=>{
                            clearAllTimeouts(setInSort);
                            resetBarColor(standard_color);
                            console.log(array)
                            }}>
                            Stop Sort
                        </button>: 
                        <button className={classes.btn} onClick={() => {

                            doAnimations(array,setArray,props.algorithm,speed,setInSort,root,animation_color,standard_color)
                        }}>
                            
                            Start Sort
                        </button>
                        }
                    </div>
                    <div className={[classes.selectellement]}>
                        <button className={classes.btn} onClick={() => {
                            resetArray(size,root, standard_color, setArray, setInSort)
                        }}>
                            New List
                        </button>
                    </div>
                    <div className={classes.selectellement}>
                        <div className={classes.slidercontainer}>
                            Size
                            <input id="size"type="range" min="10" max="500" step={1} className={classes.slider}/>
                        </div>
                    </div>
                    <div className={classes.selectellement}>
                        <div className={classes.slidercontainer}>
                            Speed
                            <input id="speed" type="range" min="1" max={MAX_SPEED} step={1} className={classes.slider}/>
                        </div>  
                    </div>
                </div>
            </div>
            <div className={classes.sortdiv}>
                {array.map((value, idx) => (
                    <div
                    className={classes.arraybar}
                    key={idx}
                    style={{
                        height: `${value}px`,
                    }}></div>
                ))}
            </div>
            <div className={classes.count}>
                    Actions: 
                    <div id="counter">0</div>
            </div>
        </div>
    );
}

export default SortingPage;