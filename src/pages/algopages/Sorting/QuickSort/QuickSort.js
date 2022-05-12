import classes from "../SortingStyle.module.css"

import { getAnimationQuickSort } from "./quicksortalgorithm";

import { useState, useEffect } from "react"

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const MAX_BAR_LENGTH = 500;
const MAX_SPEED = 1000;
 
function disableInputs(){
    // Array.from(document.getElementsByTagName('button')).forEach((e) => {
    //     e.disabled = true;
    // });
    Array.from(document.getElementsByTagName('input')).forEach((e) => {
        e.disabled = true;
    });
}
function enableInputs(){
    // Array.from(document.getElementsByTagName('button')).forEach((e) => {
    //     e.disabled = false;
    // });
    Array.from(document.getElementsByTagName('input')).forEach((e) => {
        e.disabled = false;
    });
}

function BubbleSort(props){
    // window.scrollTo({
    //     top: 88,
    //     behavior: "smooth"
    // })

    const [array, setArray] = useState([])
    const [size, setSize] = useState(50);
    const [speed, setSpeed] = useState(10);

    const [inSort, setInSort] = useState(false);


    const root = document.querySelector(':root');
    const animation_color = window.getComputedStyle(document.documentElement).getPropertyValue("--animation-color")
    const standard_color = window.getComputedStyle(document.documentElement).getPropertyValue("--firstColor")


    var resetArray = function() {
        clearAllTimeouts();
        resetBarColor();
        const temp_array = [];
        for (let i = 0; i < size; i++) {
          temp_array.push(randomIntFromInterval(5, MAX_BAR_LENGTH));
        }
        root.style.setProperty("--number-of-bars", size);
        setArray(temp_array);

        document.getElementById("counter").innerHTML = 0;
    }

    var clearAllTimeouts = function(){ //stops the animation
        setInSort(false);
        enableInputs();
        const highestId = window.setTimeout(() => {
            for (let i = highestId; i >= 0; i--) {
              window.clearInterval(i);
            }
          }, 0);
       
    }
    var resetBarColor = function(){
        const bars = document.getElementsByClassName(classes.arraybar);
        for(var bar of bars){
            bar.style.backgroundColor = standard_color;
        }
    }
    
    // var appendToArray = function(v){
    //     let temp = array
    //     for(let i = 0; i<v; i+=1){
    //         temp.concat(randomIntFromInterval(5, 300))
    //     }
    //     setArray(temp)
    // }
    // !!! Rendering is to slow with this implemented !!! other solutions?

    useEffect(() => {
        resetArray()
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


    async function doAnimations(){
        clearAllTimeouts();
        disableInputs();
        setInSort(true);

        const counter = document.getElementById("counter");

        root.style.setProperty("--animation-duration","0.1s");
    
        const [animations , temp_array] = getAnimationQuickSort(array.slice())
        let n = animations.length;
        const duration = (MAX_SPEED+1) / (speed * 3)


        let count;
        counter.innerHTML = 0;
        for(let i = 0;i<n;i++){
            const bars = document.getElementsByClassName(classes.arraybar)
            
            let firstBar = bars[animations[i].animation[0]].style;
            let secondBar = bars[animations[i].animation[1]].style;

            count = 0;
                       
            if(animations[i].state === "swap"){ 

                setTimeout(() => {
                    count++;
                    counter.innerHTML = count;
                    let temp = firstBar.height;
                    firstBar.height = secondBar.height;
                    secondBar.height = temp;
                    
                }, i * duration);

            } else if(animations[i].state === "compare"){
                setTimeout(() => {
                    count++;
                    counter.innerHTML = count;
                    if(duration > 2) {
                        firstBar.backgroundColor = animation_color;
                        secondBar.backgroundColor = animation_color;
                        setTimeout(() => {
                            firstBar.backgroundColor = standard_color;
                            secondBar.backgroundColor = standard_color;
                        }, duration);
                    }   
                }, i * duration);

                
            }
        }

        setTimeout(()=>{ // after sort
            root.style.setProperty("--animation-duration","0.5s")
            setArray(temp_array);
            setInSort(false);
            enableInputs();
        },n*duration);
    }

    return (
        <div className={classes.outer}>
            <p className={classes.title}>Quick Sort</p>
            <div className={classes.selectbar}>
                <div className={classes.innerselectbar}>
                    <div className={[classes.selectellement]}>
                        {inSort ? 
                        <button className={classes.btn} onClick={()=>{
                            clearAllTimeouts();
                            resetBarColor();
                            }}>
                            Stop Sort
                        </button>: 
                        <button className={classes.btn} onClick={doAnimations}>
                            Start Sort
                        </button>
                        }
                    </div>
                    <div className={[classes.selectellement]}>
                        <button className={classes.btn} onClick={resetArray}>
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

export default BubbleSort;