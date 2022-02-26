export function getAnimationMergeSort(array){
    let animations = [];
    const helper = array.slice()

    doMergeSort(array, animations, 0, array.length-1, helper)
    return [animations,array]
}

function doMergeSort(array,animations,l,r,helper){
    if(l === r) return;

    const m = Math.floor((l + r) / 2);

    doMergeSort(helper,animations,l,m,array);
    doMergeSort(helper,animations, m + 1 ,r,array);

    merge(array,helper,l,m,r,animations);
  
}

function merge(arr,helper,l,m,r,animations){
    let k = l;
    let i = l;
    let j = m + 1;

    while ( i <= m && j <= r) {
        
        animations.push({animation:[i,j], state:"compare"})

        if(helper[i] <= helper[j]){

            animations.push({animation:[k,k], state:"set",value:helper[i]})
            arr[k++] = helper[i++];

        } else {
       
            animations.push({animation:[k,k], state:"set",value:helper[j]})
            arr[k++] = helper[j++];

        }
    }

    while (i <= m) {
        animations.push({animation:[i,i], state:"compare"})

        animations.push({animation:[k,k], state:"set",value:helper[i]})
        arr[k++] = helper[i++];
    } 

    while ( j <= r) {
        animations.push({animation:[j,j], state:"compare"})

        animations.push({animation:[k,k], state:"set",value:helper[j]})
        arr[k++] = helper[j++];
    }


}