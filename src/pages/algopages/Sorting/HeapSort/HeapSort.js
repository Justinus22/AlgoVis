import classes from "./HeapSort.module.css"

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
    // const [pre_size, setPreSize] = useState(size);

    const root = document.querySelector(':root');
    // let array = []

    var resetArray = function() {
        const temp_array = [];
        for (let i = 0; i < size; i++) {
          temp_array.push(randomIntFromInterval(5, 300));
        }
        root.style.setProperty("--number-of-bars", size);
        // let zeros = Array.apply(null, {length: size}).fill(5);
        // if(pre_size < size){
        //     setArray(zeros)
        //     setTimeout(() => {setArray(temp_array)}, 600);
        //     setPreSize(size);
        // }     else {
        setArray(temp_array);
        // } 
      
        
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

    async function swap(i,j){  
        let temp = array.slice();
        let tmpvar = temp[i]
        temp[i] = temp[j]
        temp[j] = tmpvar
        setArray(temp)
    }


    return (
        <div className={classes.outer}>
            <p className={classes.title}>Heap Sort</p>
            <div className={classes.selectbar}>
                <div className={classes.innerselectbar}>
                    <div className={[classes.selectellement]}>
                        <button className={classes.btn} onClick={() => {swap(0,1)}}>
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
                            <input id="size"type="range" min="10" max="200" step={1} className={classes.slider}/>
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