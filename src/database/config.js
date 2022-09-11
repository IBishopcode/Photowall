import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyD0gF6EuyOUbiwH2QK3TD1CSQnat1_TOaw",
    authDomain: "photowall-e0f83.firebaseapp.com",
    databaseURL: "https://photowall-e0f83-default-rtdb.firebaseio.com",
    projectId: "photowall-e0f83",
    storageBucket: "photowall-e0f83.appspot.com",
    messagingSenderId: "707761760679",
    appId: "1:707761760679:web:c1465fd02603c9c30f6e82",
    measurementId: "G-PS464E16T6"
};

firebase.initializeApp(config)

const database = firebase.database()

export{database}