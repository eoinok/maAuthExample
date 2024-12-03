import firebase from "firebase";

const firebaseConfig = {
 //add your firebase config settings here
};

let app;

if(!firebase.apps.length){
  alert("initialising");
  app = firebase.initializeApp(firebaseConfig);
}
else {
  alert("app length " + firebase.apps.length)
}

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};


