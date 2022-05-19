import { getAnimationInsertionSort } from "./insertionsortalgorithm";
import SortingPage from "../SortingPage";

function BubbleSort(props){
    return (
      <SortingPage title="Insertion Sort" algorithm={getAnimationInsertionSort} />
    );
}

export default BubbleSort;