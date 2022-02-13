import classes from "./BubbleSort.module.css"

import { useState, useEffect } from "react"

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


function BubbleSort(props){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    const [array, setArray] = useState([])
    const [size, setSize] = useState(50);

    const root = document.querySelector(':root');
    // let array = []

    var resetArray = function() {
        console.log(size)
        const temp_array = [];
        for (let i = 0; i < size; i++) {
          temp_array.push(randomIntFromInterval(5, 300));
        }
        setArray(temp_array);
        root.style.setProperty("--number-of-bars", size) 
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

  


    return (
        <div className={classes.outer}>
            <p className={classes.title}>Bubble Sort</p>
            <div className={classes.selectbar}>
                <div className={classes.innerselectbar}>
                    <div className={[classes.selectellement]}>
                        <button className={classes.btn}>
                            Start Sort
                        </button>
                    </div>
                    <div className={[classes.selectellement]}>
                        <button className={classes.btn} onClick={resetArray}>
                            New List
                        </button>
                    </div>
                    <div className={classes.selectellement}>
                        <div className={classes.slidercontainer}>
                            Size
                            <input id="size"type="range" min="5" max="100" step={1} className={classes.slider}/>
                        </div>
                    </div>
                    <div className={classes.selectellement}>
                        <div className={classes.slidercontainer}>
                            Speed
                            <input id="speed" type="range" min="5" max="100" step={1} className={classes.slider}/>
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
        </div>
    );
}

export default BubbleSort;