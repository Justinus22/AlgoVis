import BubbleSort from "./BubbleSort";

export function getAnimationBubbleSort(array){
    let animations = [];
    doBubbleSort(array,animations)
    return [animations,array]
}

function doBubbleSort(array,animations){
    const n = array.length;
    for(let i = 0;i<n;i++){
        for(let j = 0;j<n-1-i;j++){
            animations.push({animation:[j,j+1],state:0})
            if(array[j+1] < array[j]){
                [array[j+1], array[j]] = [array[j],array[j+1]]
                animations.push({animation:[j+1,j],state:1})
            }
        }
    }
}