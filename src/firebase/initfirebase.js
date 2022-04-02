import firebaseConfig from "./config"

import firebase from "firebase/compat/app"

import "firebase/compat/auth";

export const app = firebase.initializeApp(firebaseConfig);

export default app;
