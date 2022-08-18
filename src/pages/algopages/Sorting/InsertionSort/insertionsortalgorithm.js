export function getAnimationInsertionSort(array){
    let animations = [];
    doInsertionSort(array,animations)
    return [animations,array]
}

function doInsertionSort(array,animations){
    const n = array.length;
    let i, j, curr;
    for(i = 0;i<n;i++){   
        j = i - 1
        
        curr = array[i];
        animations.push({animation:[i,-1], state:"store", value:array[i]})
        while (j >= 0 && array[j] > curr){            
            animations.push({animation:[i,j], state:"compare"})
            array[j + 1]  = array[j]
            animations.push({animation: [j+1,j], state:"overwrite",value:array[j]})
            j -= 1;
        }
        array[j + 1] = curr;
        animations.push({animation:[j+1,i], state:"set",value:curr})
    }
}