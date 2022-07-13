import classes from "./LoginPage.module.css"

import { Link } from "react-router-dom"

import React, {useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../../../contexts/Auth.js";

import app from "../../../firebase/initfirebase";

function LoginPage(props){

  const user = useContext(AuthContext);

  const handleLogin = async event => {
    
    event.preventDefault();
    const { email, password } = event.target.elements;
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        // .then((userCredential) => {
        //   console.log(userCredential.user)
        // })
        .catch((error) => {
          alert(error.message);
        });
    }

    if(user.currentUser){
      return (
        <Redirect to="/account" />
      );
    }

    return (
        <div className={classes.outer}>
            <div className={classes.title}>
                Log In
            </div>
            <form onSubmit={handleLogin} className={classes.form}>
                <label className={classes.label}>
                  <input  name="email" type="email" placeholder="Email" className={classes.input}/>
                </label>
                <label className={classes.label}>
                  <input name="password" type="password" placeholder="Password" className={classes.input}/>
                </label>
                <button type="submit" className={classes.btn}>Log in</button>
            </form>
            <div>
              <Link to="/account/signup" className={classes.signuplink}> Sign Up Page</Link>
            </div>
        </div>
    );
}

export default LoginPage;