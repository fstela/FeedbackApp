import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDO5LhaGX1qZcm9pNUxmWXmFDHwFM74-lQ",
    authDomain: "react-course-ae283.firebaseapp.com",
    projectId: "react-course-ae283",
    storageBucket: "react-course-ae283.appspot.com",
    messagingSenderId: "27358848500",
    appId: "1:27358848500:web:37635306740bd5781fc5a1"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();