import { Route , Switch} from 'react-router-dom'

import BubbleSort from './Sorting/BubbleSort/BubbleSort.js';
import InsertionSort from "./Sorting/InsertionSort/InsertionSort.js";
import MergeSort from "./Sorting/MergeSort/MergeSort.js";
import QuickSort from "./Sorting/QuickSort/QuickSort.js";

function RouteManager() {
 
  return (
    <Switch>
        <Route path={["/home/bubblesort"]} exact> 
            <BubbleSort />
        </Route>
        <Route path={["/home/insertionsort"]} exact> 
            <InsertionSort />
        </Route>
        <Route path={["/home/mergesort"]} exact> 
            <MergeSort />
        </Route>
        <Route path={["/home/quicksort"]} exact> 
            <QuickSort />
        </Route>
    </Switch>
  );
}

export default RouteManager;