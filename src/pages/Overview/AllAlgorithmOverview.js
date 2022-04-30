import Searching from "./Searching/Searching.js"
import Sorting from "./Sorting/Sorting.js"

import IntroText from "./IntroText/IntroText.js";

import classes from "./AllAlgorithmOverview.module.css"



function AllAlgorithmOverview(props) { 

  // const importFiles = (dir) => { 
  //   return listReactFiles(dir).then(files => {
  //     return files
  //   })
  // }

  // var temp = importFiles("./algopages/");

  // console.log(temp)


  return (
    <div className={classes.page}>
      <IntroText />

      <div className={classes.chapter}>
        <Sorting />
      </div>
      <div className={classes.chapter}>
        <Sorting />
      </div>
      {/* <div className={classes.chapter}>
        <Searching />
      </div>
      <div className={classes.chapter}>
        <Searching />
      </div> */}
    </div>
  );
}

export default AllAlgorithmOverview;
