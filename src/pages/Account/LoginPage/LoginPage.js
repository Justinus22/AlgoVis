import classes from "./LoginPage.module.css"

import { Link } from "react-router-dom"

import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../../firebase/initfirebase";
// import { AuthContext } from "../../context/Auth";




function LoginPage(props, {history}){

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
          } catch (error) {
            alert('Worng User Name or Password');
          }
        },
        [history]
      );

    return (
        <div className={classes.outer}>
            <div className={classes.title}>
                Log In
            </div>
                <form onSubmit={handleLogin}>
                    <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default LoginPage;