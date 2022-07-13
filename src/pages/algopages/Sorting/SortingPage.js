import classes from "./SortingStyle.module.css"

import FavouriteStar from "../../../components/svg/FavouriteStar";

import doAnimations, {resetArray, resetBarColor, setArrayToBars, clearAllTimeouts, MAX_SPEED,  MAX_NUM_OF_BARS} from "./animation.js";
import { AuthContext } from "../../../contexts/Auth.js"

import LearnBar from "./LearnBar/LearnBar";
// import ExplanationBar from "./ExplanationBar/ExplanationBar";

import { useState, useEffect, useContext} from "react"
import { getDatabase, ref, set, onValue} from "firebase/database"

function SortingPage(props){

    const user = useContext(AuthContext).currentUser;
    const db = getDatabase();

    const firstColor = getComputedStyle(document.documentElement).getPropertyValue('--secondColor');
    const favouritesColor = getComputedStyle(document.documentElement).getPropertyValue('--favourite-color');

    const [array, setArray] = useState([])
    const [size, setSize] = useState(50);
    const [speed, setSpeed] = useState(10);

    const [inSort, setInSort] = useState(false);

    const [count, setCount] = useState(0);

    const [isFavourite, setIsFavourite] = useState(false)

    const [isLearnMode, setIsLearnMode] = useState(false);

    const root = document.querySelector(':root');

    const animation_color = window.getComputedStyle(document.documentElement).getPropertyValue("--animation-color")
    const standard_color = window.getComputedStyle(document.documentElement).getPropertyValue("--firstColor")

    useEffect(() => {

        resetArray(size,root, standard_color, setArray, setInSort)
        getFavourite(user,props.title,db,true)
        window.scrollTo(0, 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);




    const addNewUserFavourite = function(user, favourite, db){
        set(ref(db, 'users/' + user.uid + "/favourites/" + favourite), {
            "isFavourite": true
        });
    }

    const removeNewUserFavourite = function(user, favourite, db){
        set(ref(db, 'users/' + user.uid + "/favourites/" + favourite), {
            "isFavourite": false
        });
    }

    const getFavourite = function(user, favourite,db, pageload){
        if(user){
            onValue(ref(db, "users/" + user.uid +"/favourites"), (DataSnapshot) => {
                const data = DataSnapshot.val();
                setIsFavourite(data[props.title] ? data[props.title].isFavourite : false)
            })
        } else if(!pageload){
            alert("Please login to add favourites.")
        }
    }


    const handleFavouriteButton = function(){
        if(user){
            if(isFavourite){
                removeNewUserFavourite(user, props.title, db)
            } else {        
                addNewUserFavourite(user, props.title, db)
            }
        } else {
            alert("Please login to add favourites.")
        }
    }

    const handleLearnModeButton = function(){
        if(!isLearnMode){
            resetArray(10,root, standard_color, setArray, setInSort)
        }
        setIsLearnMode(!isLearnMode);

        resetBarColor(standard_color);        
    }


    let arr_size_element = document.querySelector("#size")
    if(arr_size_element){
        arr_size_element.addEventListener("input", () => {
            setSize(arr_size_element.value); 
        });
    }

    let animation_speed_element = document.querySelector("#speed");
    if(animation_speed_element){
        animation_speed_element.addEventListener("input", () => {
            setSpeed(animation_speed_element.value);
        })
    }


   
    return (
        <div className={classes.outer}>
            <div className={classes.titlefavwrapper}>
                <button onClick={handleLearnModeButton} className={classes.selectbutton +" "+ classes.learnbtn}>
                    <p className={classes.learntitle}>Learn</p>
                </button>

                <p className={classes.title}>{props.title}</p>

                <button onClick={handleFavouriteButton} className={classes.selectbutton + " "+ classes.favbtn}>
                    <FavouriteStar size="max(15px,2.5vW)" color={isFavourite ? favouritesColor : firstColor}/>
                </button>
            </div>
            {/* {isLearnMode ? 
            <>
                <ExplanationBar title={props.title} />
            </>
            : null} */}
            <div className={classes.selectbar}>
                {isLearnMode ? 
                <>
                    <LearnBar sort={props.algorithm(array.slice())} setarr={setArray} setcount={setCount}/>
                </>
                :
                <div className={classes.innerselectbar}>
                    <div className={[classes.selectellement]}>
                        {inSort ? 
                        <button className={classes.btn} onClick={()=>{
                            clearAllTimeouts(setInSort);
                            resetBarColor(standard_color);
                            setArrayToBars(setArray);
                            console.log(array)
                            }}>
                            Stop Sort
                        </button>: 
                        <button className={classes.btn} onClick={() => {
                            console.log(array)
                            doAnimations(array,
                                        setArray,
                                        props.algorithm,
                                        speed,
                                        setInSort,
                                        setCount,
                                        root,
                                        animation_color,
                                        standard_color)
                        }}>
                            
                            Start Sort
                        </button>
                        }
                    </div>
                    <div className={[classes.selectellement]}>
                        <button className={classes.btn} onClick={() => {
                            resetArray(size,root, standard_color, setArray, setInSort)
                        }}>
                            New List
                        </button>
                    </div>
                    <div className={classes.selectellement}>
                        <div className={classes.slidercontainer}>
                            Size
                            <input id="size"type="range" min="3" max={MAX_NUM_OF_BARS}step={1} className={classes.slider}/>
                        </div>
                    </div>
                    <div className={classes.selectellement}>
                        <div className={classes.slidercontainer}>
                            Speed
                            <input id="speed" type="range" min="1" max={MAX_SPEED} step={1} className={classes.slider}/>
                        </div>  
                    </div>
                </div>
                }
            </div>
            <div className={classes.sortdiv}>
                {array.map((value, idx) => (
                    <div
                    className={classes.arraybar}
                    key={idx}
                    style={{
                        height: `${value}px`,
                    }}>{isLearnMode ? 
                    <div className={classes.arraybarnum}>
                        {idx}
                    </div>
                    :null}</div>
                    
                ))}
            </div>
            
            <div className={classes.count}>
                    Actions: 
                    <div id="counter">{count}</div>
            </div>
        </div>
    );
}

export default SortingPage;