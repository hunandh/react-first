import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCJ5tf8obMY8yk4cJQElMIhocD9ak1l0DU",
    authDomain: "react-play-adb6b.firebaseapp.com",
    databaseURL: "https://react-play-adb6b.firebaseio.com",
    storageBucket: "react-play-adb6b.appspot.com",
    messagingSenderId: "210726305727"
};

const FbApp = firebase.initializeApp(firebaseConfig);

export default FbApp;