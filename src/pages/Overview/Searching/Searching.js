import Card from "../../../components/layout/card/Card.js"
import classes from "./Searching.module.css"
import { Link } from "react-router-dom";

function Searching(props) {
  return (
    <div className={classes.outer}>
      <p className={classes.title}>Searching Algorithms</p>
      <div className={classes.select}>
        <div className={classes.card}>
          <Link to="/home/linearsearch/">
            <Card>
              <div className={classes.cardtitle}>
                Linear Search
              </div>
            </Card>
          </Link>
        </div>
        <div className={classes.card}>
          <Link to="/home/binarysearch/">
            <Card>
              <div className={classes.cardtitle}>
                Binary Search
              </div>
            </Card>
          </Link>
        </div>
      </div>
  </div>
  );
}

export default Searching;

