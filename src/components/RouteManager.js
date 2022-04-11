import { Route , Switch} from 'react-router-dom'

import BubbleSort from '../pages/algopages/Sorting/BubbleSort/BubbleSort.js';
import InsertionSort from "../pages/algopages/Sorting/InsertionSort/InsertionSort.js";
import MergeSort from "../pages/algopages/Sorting/MergeSort/MergeSort.js";
import QuickSort from "../pages/algopages/Sorting/QuickSort/QuickSort.js";

import LoginPage from '../pages/Account/LoginPage/LoginPage.js';
import SignupPage from '../pages/Account/SignupPage/SignupPage.js';

function RouteManager() {
 
  return (
    <Switch>
        {
        //Algorithm Routes
        }
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