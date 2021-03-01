import Firebase from "firebase"; // If using Firebase database

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAfzhZjxCFI7ZiLXm9P0XYTtk4kGIcdKYg",
  authDomain: "ride-sharing-app-3ea1b.firebaseapp.com",
  databaseURL: "https://ride-sharing-app-3ea1b-default-rtdb.firebaseio.com",
  projectId: "ride-sharing-app-3ea1b",
  storageBucket: "ride-sharing-app-3ea1b.appspot.com",
  messagingSenderId: "116956078724",
  appId: "1:116956078724:web:a93d5c70e33c0253fb18d1",
  measurementId: "G-MJ8LDBGFBR",
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;
