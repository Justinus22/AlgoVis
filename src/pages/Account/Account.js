import LoginPage from "./LoginPage/LoginPage.js"

import app from "../../firebase/initfirebase"

import { AuthContext } from "../../contexts/Auth.js"

import { useContext } from "react"

import { getAuth, signOut } from "firebase/auth";

import { Redirect } from "react-router";

function Account() {

  const user = useContext(AuthContext);
  const auth = getAuth();

  if(Object.is(user.currentUser,null)){
    return (
      <Redirect to="/account/login" />
    );
  }

  const signout = () => {
    signOut(auth).then(() => {
      console.log("Signed Out")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div>
      <button onClick={signout}> Sign Out </button>
    </div>
  );
}

export default Account;
