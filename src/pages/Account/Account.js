//import app from "../../firebase/initfirebase"

import { AuthContext } from "../../contexts/Auth.js"

import { useContext, useEffect, useState } from "react"

import { getAuth, signOut } from "firebase/auth";
import {getDatabase,ref, onValue} from "firebase/database"

import { Redirect} from "react-router";

function Account() {

  const user = useContext(AuthContext).currentUser;
  const auth = getAuth();
  const db = getDatabase();

  const [username, setUsername] = useState();
  
  const getUsername = function(user, db){
      const usernameRef = ref(db, "users/" + user.uid +"/username");
       
      onValue(usernameRef, (DataSnapshot) => {
          const data = DataSnapshot.val();
          setUsername(data)
      })

  }

  const [favourites, setFavourites] = useState([]);

  const getFavourites = function(user, db){
    const usernameRef = ref(db, "users/" + user.uid +"/favourites");
     
    onValue(usernameRef, (DataSnapshot) => {
        const data = DataSnapshot.val();
        setFavourites(Object.keys(data).map((sort) => data[sort].isFavourite ? sort : null)
                                        .filter(f => f !== null))
    })

}

  const signout = () => {
    signOut(auth).then(() => {
      console.log("Signed Out")
    }).catch((error) => {
      // An error happened.
    });
  }


  useEffect(() => {
      getUsername(user, db)
      getFavourites(user,db);
  }, [user,db])


  if(Object.is(user,null)){
    return (
      <Redirect to="/account/login" />
    );
  }

    
  return (
    <div>
      <h1> Welcome {username}</h1>
        <div>
          Your Favouites are:
        <ul>
          {favourites.map((fav) => <li>{fav}</li>)}
        </ul>
      </div>
      <button onClick={signout}> Sign Out </button>
    </div>
  );
}

export default Account;
