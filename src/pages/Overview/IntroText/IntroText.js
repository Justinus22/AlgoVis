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
                Lorem ipsum dolor sit amet, 
                consetetur sadipscing elitr, sed diam nonumy e
                irmod tempor invidunt ut labore et dolore magn
                a aliquyam erat, sed diam voluptua. At vero eos et 
                accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ips
                
                um dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                labore et dolore magna aliquyam erat, sed diam voluptua. At 
                vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet.
            </p>
        </div>
    )
}

export default IntroText;