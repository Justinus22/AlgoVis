
export default function getAnimationsMergeSort(array){
    
}

function MergeSortAlgorithm(array){
    if( array.length === 1){
        return array
    }
    const middle = Math.floor(array.length/2);
    const left =  MergeSortAlgorithm(array.slice(0,middle));
    const right = MergeSortAlgorithm(array.slice(middle));

    return merge(left,right)
}

const merge = (left,right) => {
    const sortedArray = []
    let i = 0, j = 0;

    while((i<left.length) && (j<right.length)){
        if(left[i] < right[j]){
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }
    while(i<left.length){
        sortedArray.push(left[i++]);
    }
    while(j<right.length){
        sortedArray.push(right[j++]);
    }
    return sortedArray;
}