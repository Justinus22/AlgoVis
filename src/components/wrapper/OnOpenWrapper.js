import classes from "./OnOpenWrapper.module.css"

import { useContext } from "react"

import OnOpenContext from "../../contexts/OnOpenContext"

function OnOpenWrapper(props) {

  const onopenCtx = useContext(OnOpenContext);

  // console.log(onopenCtx)

  return (
    <div>
      <div className={onopenCtx.onopen? classes.onopenpage : classes.notonopenpage}>
        Algorithm Visulaisation
      </div>
      {props.children}
    </div>
  );
}

export default OnOpenWrapper;
