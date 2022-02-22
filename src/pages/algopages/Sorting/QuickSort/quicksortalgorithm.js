export function getAnimationQuickSort(array){
    let animations = [];
    console.log(array)
    doQuickSort(array,animations,0,array.length-1)

    console.log(array)
    return [animations,array]
}

function doQuickSort(array,animations,l,h){
    if(l < h){

        let pivot = partition(array,animations,l,h)

        doQuickSort(array, animations, l, pivot - 1);
        doQuickSort(array, animations, pivot + 1, h);

    }
}

function partition(arr,animations,l,h){
    let pivot = arr[h];

    let i = l - 1;
    for(let j = l;j <= h - 1; j++){
        animations.push({animation:[j,h], state:"compare"})
        if(arr[j] < pivot){
            i++;
            animations.push({animation:[i,j],state:"swap"})
            swap(arr,i,j)
        }
    }
    animations.push({animation:[i+1,h], state:"swap"})
    swap(arr,i+1,h)
    return i+1;
}

function swap(array,i,j){
    let t = array[i]
    array[i] = array[j];
    array[j] = t;
}