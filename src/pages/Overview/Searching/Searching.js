import Card from "../../../components/layout/card/Card.js"
import classes from "./Searching.module.css"

function Searching(props) {
  return (
    <div className={classes.outer}>
      <p className={classes.title}>Searching Algorithms</p>
      <table className={classes.table}>
      <tr>
        <td>
          <div className={classes.card}>
            <Card>
              <div className={classes.cardtitle}>
                Linear Search
              </div>
            </Card>
          </div>
        </td>
        <td>
          <div className={classes.card}>
            <Card>
              <div className={classes.cardtitle}>
                Binary Search
              </div>
            </Card>
          </div>
        </td>
      </tr>
    </table>
    </div>
  );
}

export default Searching;
