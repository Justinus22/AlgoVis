import classes from "./SignupPage.module.css"

import { createUserWithEmailAndPassword } from "firebase/auth";

import { useContext } from "react";
import { Redirect } from "react-router-dom";

import app from "../../../firebase/initfirebase";
import { AuthContext } from "../../../contexts/Auth";

function SignupPage(props){

    const user = useContext(AuthContext);

    const handleSignUp = async event => {
        event.preventDefault();

        const { email, password } = event.target.elements;


        app.auth().createUserWithEmailAndPassword(email.value, password.value)
        // .then((userCredential) => {
        //     props.history.replace({ pathname: "/account"})
        //     console.log("changed")
        // })
        .catch((error) => {
            alert(error.message);
        })
    }
 
    if(user.currentUser){
        return (
          <Redirect to="/account" />
        );
      }

    return (
    <div className={classes.outer}>
        <div className={classes.title}>
            Sign Up
        </div>
        <form onSubmit={handleSignUp} className={classes.form}>
            <label>
                <input name="email" type="email" placeholder="Email" className={classes.input}/>
            </label>
            <label>
                <input name="password" type="password" placeholder="Password" className={classes.input}/>
            </label>
            <button type="submit" className={classes.btn}>Sign Up</button>
        </form>
    </div>
    );
}

export default SignupPage;