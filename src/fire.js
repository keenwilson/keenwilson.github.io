import firebase from "firebase";
const config = {
  apiKey: "AIzaSyBJ9Cm8E_0G8RVukNvv8dcdf9sNV8NwwHo",
  authDomain: "keenwilson-portfolio.firebaseapp.com",
  databaseURL: "https://keenwilson-portfolio.firebaseio.com",
  projectId: "keenwilson-portfolio",
  storageBucket: "keenwilson-portfolio.appspot.com",
  messagingSenderId: "213598846527"
};

const fire = firebase.initializeApp(config);
export default fire;
