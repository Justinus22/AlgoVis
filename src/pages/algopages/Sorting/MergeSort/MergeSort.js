import { getAnimationMergeSort } from "./mergesortalgorithm";
import SortingPage from "../SortingPage";

function MergeSort(props){
    return (
      <SortingPage title="Merge Sort" algorithm={getAnimationMergeSort} />
    );
}

export default MergeSort;