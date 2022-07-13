import classes from "./SortingStyle.module.css"


    // var appendToArray = function(v){
    //     let temp = array
    //     for(let i = 0; i<v; i+=1){
    //         temp.concat(randomIntFromInterval(5, 300))
    //     }
    //     setArray(temp)
    // }
    // !!! Rendering is to slow with this implemented !!! other solutions?


const MAX_BAR_LENGTH = 500;
const MAX_SPEED = 1000;
const SCREEN_WIDTH = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const MAX_NUM_OF_BARS = (SCREEN_WIDTH * 0.8) / 3; //screewidth * 0.8 = to the width of sort area
                                                 // :3 because min width of a bar is 3px 

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

var clearAllTimeouts = function(setInSort){ //stops the animation
    setInSort(false);
    enableInputs();
    const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= 0; i--) {
          window.clearInterval(i);
        }
      }, 0);
   
}

var resetArray = function(size,
                        root,
                        standard_color,
                        setArray,
                        setInSort) {
    

    clearAllTimeouts(setInSort);
    resetBarColor(standard_color);
    const temp_array = [];
    for (let i = 0; i < size; i++) {
      temp_array.push(randomIntFromInterval(5, MAX_BAR_LENGTH));
    }
    root.style.setProperty("--number-of-bars", size);
    setArray(temp_array);
}

var setArrayToBars = function(setArray){ // sets the values of the state array to the displayed bar heights
    let temp = []
    for(let bar of document.getElementsByClassName(classes.arraybar)){
        temp.push(parseInt(bar.style.height.slice(0,-2)))
    }
    console.log(temp)
    setArray(temp);
}

const resetBarColor = function(standard_color){
    const bars = document.getElementsByClassName(classes.arraybar);
    for(var bar of bars){
        bar.style.backgroundColor = standard_color;
    }
}

function disableInputs(){ 
    // Array.from(document.getElementsByTagName('button')).forEach((e) => {
    //     e.disabled = true;
    // });
    Array.from(document.getElementsByTagName('input')).forEach((e) => {
        e.disabled = true;
    });
}
function enableInputs(){
    Array.from(document.getElementsByTagName('button')).forEach((e) => {
        e.disabled = false;
    });
    Array.from(document.getElementsByTagName('input')).forEach((e) => {
        e.disabled = false;
    });
}


async function doAnimations(array,
                            setArray,
                            algo_func,
                            speed,
                            setInSort,
                            setCount,
                            root,
                            animation_color,
                            standard_color){
    clearAllTimeouts(setInSort);
    setInSort(true);
    disableInputs();

    root.style.setProperty("--animation-duration","0.1s");
    
    // let helper_array = array.slice();
    const [animations , temp_array] = algo_func(array.slice())
    let n = animations.length;
    const duration = (MAX_SPEED+1) / (speed * 3)


    for(let i = 0;i<n;i++){
        const bars = document.getElementsByClassName(classes.arraybar)
        
        let firstBar = bars[animations[i].animation[0]].style;
        let secondBar = bars[animations[i].animation[1]].style;
        let value = `${animations[i].value}px`

        

                   
        if(animations[i].state === "swap"){ 

            setTimeout(function(){
                setCount(i);
                
                let temp = firstBar.height;
                firstBar.height = secondBar.height;
                secondBar.height = temp;
                
            }, i * duration);

        } else if(animations[i].state === "compare"){
            setTimeout(function(){
                setCount(i);
                if(duration > 2) {
                    firstBar.backgroundColor = animation_color;
                    secondBar.backgroundColor = animation_color;
                    setTimeout(() => {
                        firstBar.backgroundColor = standard_color;
                        secondBar.backgroundColor = standard_color;
                    }, duration);
                }   
            }, i * duration);

            
        }else if(animations[i].state === "set"){ 

            setTimeout(() => {
                setCount(i);
                
                firstBar.height = value;
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

export { resetArray,
        resetBarColor,
        setArrayToBars,
        clearAllTimeouts,
        enableInputs,
        disableInputs,
        MAX_BAR_LENGTH,
        MAX_SPEED,
        MAX_NUM_OF_BARS}
export default doAnimations;