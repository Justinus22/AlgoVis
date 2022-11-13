


const MAX_BOX_NUM_SPREAD = 5; // how far the nums between boxes can be at max
const MAX_SPEED = 1000;
const SCREEN_WIDTH = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);


function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



  var resetArray = function(size,
    root,
    standard_color,
    setArray,
    setInSort) {



    const temp_array = [];
    let currentNum = 0;
    for (let i = 0; i < size; i++) {
        const add = randomIntFromInterval(0, MAX_BOX_NUM_SPREAD);
        const next = currentNum + add;
        currentNum = next;

        temp_array.push(next);
    }
    root.style.setProperty("--number-of-boxes", size);
    setArray(temp_array);
};


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

export { resetArray,
    enableInputs,
    disableInputs,
    MAX_BOX_NUM_SPREAD,
    MAX_SPEED}