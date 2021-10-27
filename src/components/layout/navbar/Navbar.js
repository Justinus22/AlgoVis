import classes from "./Navbar.module.css"

import { Link } from "react-router-dom"

function Navbar(props) {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <a href='https://github.com/Justinus22/AlgoVis/tree/master' target="_blank" rel="noreferrer"> My Github </a>
          </li>
          <li>
            <Link to="/"> Homepage </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.title}>
        Algorithm Visulaisation
      </div>
      <nav>
      <ul>
        <li>
          <a href='https://github.com/Justinus22/AlgoVis/tree/master' target="_blank" rel="noreferrer"> My Github </a>
        </li>
        <li>
          <Link to="/"> Homepage </Link>
        </li>
      </ul>
      </nav>
    </header>
  );
}

export default Navbar;
