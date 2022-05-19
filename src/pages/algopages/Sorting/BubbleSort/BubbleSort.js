import { getAnimationBubbleSort } from "./bubblesortalgorithm";
import SortingPage from "../SortingPage";

function BubbleSort(props){
    return (
      <SortingPage title="Bubble Sort" algorithm={getAnimationBubbleSort} />
    );
}

export default BubbleSort;