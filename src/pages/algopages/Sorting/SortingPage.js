import classes from "./SortingStyle.module.css"

import FavouriteStar from "../../../components/svg/FavouriteStar";

import doAnimations, {resetArray, resetBarColor, clearAllTimeouts, MAX_SPEED} from "./animation.js";
import { AuthContext } from "../../../contexts/Auth.js"

import { useState, useEffect, useContext } from "react"
import { getDatabase, ref, set, onValue, DataSnapshot } from "firebase/database"

function SortingPage(props){

    const user = useContext(AuthContext).currentUser;
    const db = getDatabase();

    const firstColor = getComputedStyle(document.documentElement).getPropertyValue('--secondColor');
    const favouritesColor = getComputedStyle(document.documentElement).getPropertyValue('--favourite-color');

    const [array, setArray] = useState([])
    const [size, setSize] = useState(50);
    const [speed, setSpeed] = useState(10);

    const [inSort, setInSort] = useState(false);

    const [isFavourite, setIsFavourite] = useState(false)

    const root = document.querySelector(':root');
    const animation_color = window.getComputedStyle(document.documentElement).getPropertyValue("--animation-color")
    const standard_color = window.getComputedStyle(document.documentElement).getPropertyValue("--firstColor")

    useEffect(() => {
        resetArray(size,root, standard_color, setArray, setInSort)
        getFavourite(user,props.title,db,true)
        window.scrollTo(0, 0);
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
                <div></div>
                <p className={classes.title}>{props.title}</p>

                <button onClick={handleFavouriteButton} className={classes.favouritebutton}>
                    <FavouriteStar size="2.5vW" color={isFavourite ? favouritesColor : firstColor}/>
                </button>
            </div>
            <div className={classes.selectbar}>
                <div className={classes.innerselectbar}>
                    <div className={[classes.selectellement]}>
                        {inSort ? 
                        <button className={classes.btn} onClick={()=>{
                            clearAllTimeouts(setInSort);
                            resetBarColor(standard_color);
                            console.log(array)
                            }}>
                            Stop Sort
                        </button>: 
                        <button className={classes.btn} onClick={() => {

                            doAnimations(array,setArray,props.algorithm,speed,setInSort,root,animation_color,standard_color)
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
                            <input id="size"type="range" min="10" max="500" step={1} className={classes.slider}/>
                        </div>
                    </div>
                    <div className={classes.selectellement}>
                        <div className={classes.slidercontainer}>
                            Speed
                            <input id="speed" type="range" min="1" max={MAX_SPEED} step={1} className={classes.slider}/>
                        </div>  
                    </div>
                </div>
            </div>
            <div className={classes.sortdiv}>
                {array.map((value, idx) => (
                    <div
                    className={classes.arraybar}
                    key={idx}
                    style={{
                        height: `${value}px`,
                    }}></div>
                ))}
            </div>
            <div className={classes.count}>
                    Actions: 
                    <div id="counter">0</div>
            </div>
        </div>
    );
}

export default SortingPage;