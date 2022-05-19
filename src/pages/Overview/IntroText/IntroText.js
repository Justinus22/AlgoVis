import classes from "./IntroText.module.css"

function IntroText(){

    return (
        <div className={classes.outer}>
            <div className={classes.title} >
                Welcome 
                <div className={classes.innertitle}>
                    to AlgoVis
                </div>  
            </div>
            <p className={classes.text}>
               I am happy to see you here one my website!
               I dont know how you even got here but hey, now your here. 
               <br />
               This website is still in a very early develpment stage and thus you could stumble over quite a few bugs.
               <br />
               The purpose of this website is to visualize diffrent algorithms.
               My goal is that you will be alble to understand how these algorihtms work and get a deeper understanding of them.
               <br/> <br />
               ...also...it looks cool...
               <br /> <br />
                Have fun!
            </p>
        </div>
    )
}

export default IntroText;