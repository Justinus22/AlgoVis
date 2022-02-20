import Card from "../../../components/layout/card/Card.js"
import classes from "./Sorting.module.css"

import { Link } from "react-router-dom"

function Sorting(props) {
  return (
    <div className={classes.outer}>
      <p className={classes.title}>Sorting Algorithms</p>
      <div className={classes.select}>
        <div className={classes.card}>
            <Link to="/home/bubblesort">
                <Card>
                <div className={classes.cardtitle}>
                    Bubble Sort
                </div>
                </Card>
            </Link>
        </div>
        <div className={classes.card}>
            <Link to="/home/insertionsort">
                <Card>
                <div className={classes.cardtitle}>
                    Insertion Sort
                </div>
                </Card>
            </Link>
        </div>
        <div className={classes.card}>
            <Link to="/home/mergesort">
                <Card>
                <div className={classes.cardtitle}>
                    Merge Sort
                </div>
                </Card>
            </Link>
        </div>
        <div className={classes.card}>
            <Link to="/home/quicksort">
                <Card>
                <div className={classes.cardtitle}>
                    Quick Sort
                </div>
                </Card>
            </Link>
        </div>
      </div>
  </div>
  );
}

export default Sorting;

