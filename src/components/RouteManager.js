import { Route , Switch} from 'react-router-dom'

import BubbleSort from '../pages/algopages/Sorting/BubbleSort/BubbleSort.js';
import InsertionSort from "../pages/algopages/Sorting/InsertionSort/InsertionSort.js";
import MergeSort from "../pages/algopages/Sorting/MergeSort/MergeSort.js";
import QuickSort from "../pages/algopages/Sorting/QuickSort/QuickSort.js";

import LinearSearch from '../pages/algopages/Searching/LinearSearch/LinearSearch.js';
import BinarySearch from '../pages/algopages/Searching/BinarySearch/BinarySearch.js';

import LoginPage from '../pages/Account/LoginPage/LoginPage.js';
import SignupPage from '../pages/Account/SignupPage/SignupPage.js';

function RouteManager() {
 
  return (
    <Switch>
        {
        //Algorithm Routes
        }
        {/* sorting */}
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

        {/* searching */}
        <Route path={["/home/linearsearch"]} exact> 
            <LinearSearch />
        </Route>
        <Route path={["/home/binarysearch"]} exact> 
            <BinarySearch />
        </Route>
        {
            //Account Routes
        }
        
        <Route path={["/account/login"]} exact> 
            <LoginPage />
        </Route>
        <Route path={["/account/signup"]} exact>
            <SignupPage /> 
        </Route>
    </Switch>
  );
}

export default RouteManager;