import { getAnimationQuickSort } from "./quicksortalgorithm";
import SortingPage from "../SortingPage";

function QuickSort(props){
    return (
      <SortingPage title="Quick Sort" algorithm={getAnimationQuickSort} />
    );
}

export default QuickSort;