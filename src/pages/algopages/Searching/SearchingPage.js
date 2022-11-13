import classes from "./SearchingPage.module.css"

import { MAX_BOX_NUM_SPREAD, MAX_SPEED, resetArray} from "./animation.js"

import { useEffect, useState } from "react"

function SearchingPage(props){


    const [array, setArray] = useState([]);
    const [size, setSize] = useState(15);
    const [speed, setSpeed] = useState(5);

    const [inSort, setInSort] = useState(false);
    

    const root = document.querySelector(':root');

    const animation_color = window.getComputedStyle(document.documentElement).getPropertyValue("--animation-color")
    const standard_color = window.getComputedStyle(document.documentElement).getPropertyValue("--firstColor")

    useEffect(() => {

        resetArray(size,root, standard_color, setArray, setInSort)

        window.scrollTo(0, 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    

    return (
        <div className={classes.outer}>
            <h2 className={classes.title}>{props.title}</h2>
            <section className={classes.selectbar}>
                <div className={classes.selectelement}>
                    <button className={classes.btn}>Start Search</button>   
                </div>
                <div className={classes.selectelement}>
                    <button className={classes.btn}>New List</button>
                </div>
                <div className={classes.selectelement}>
                    <div className={classes.slidercontainer}>
                        Size
                        <input id="size"type="range" min="3" max={10}step={1} className={classes.slider}/>
                    </div>
                </div>
                <div className={classes.selectelement}>
                    <div className={classes.slidercontainer}>
                        Speed
                        <input id="size"type="range" min="3" max={10}step={1} className={classes.slider}/>
                    </div>
                </div>
            </section>
            <section className={classes.searchsection}>
                {array.map((value, idx) => (
                    <div
                    className={classes.arraybox}
                    key={idx}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   p
                    id={idx}>
                        {value}
                    </div>
                ))}
            </section>
            <div>

            </div>
        </div>
    );
}

export default SearchingPage;