import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyATnFPXbvzI3vnQ6BE0Ekayz9jljbvmi0I",
    authDomain: "truexam-assignment.firebaseapp.com",
    databaseURL: "https://truexam-assignment.firebaseio.com",
    projectId: "truexam-assignment",
    storageBucket: "truexam-assignment.appspot.com",
    messagingSenderId: "1077395861418",
    appId: "1:1077395861418:web:53df9853dcf520d9dc45d3"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
export default fire;
