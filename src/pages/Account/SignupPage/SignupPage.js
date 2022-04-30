import classes from "./SignupPage.module.css"

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set} from "firebase/database";

import { useContext } from "react";
import { Redirect } from "react-router-dom";

import app from "../../../firebase/initfirebase";
import { AuthContext } from "../../../contexts/Auth";

function SignupPage(props){

    const user = useContext(AuthContext);

    const db = getDatabase();
    

    const handleSignUp = async event => {
        event.preventDefault();

        const { email, password, name } = event.target.elements;

        if(name.value == ""){
            alert("Please enter a name.")
        } else {
            app.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                set(ref(db, 'users/' + userCredential.user.uid), {
                    username: name.value,
                    uId: userCredential.user.uid,
                    email: userCredential.user.email
                });
            })
            .catch((error) => {
                alert(error.message);
            });
        }
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
                <input name="name" type="text" placeholder="Name" className={classes.input}/>
            </label>
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

