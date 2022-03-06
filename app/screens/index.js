// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5dfif8hY7V3w2gfDMjfV8YbhHMGpcJ7I",
  authDomain: "trackly-1.firebaseapp.com",
  projectId: "trackly-1",
  storageBucket: "trackly-1.appspot.com",
  messagingSenderId: "199977256360",
  appId: "1:199977256360:web:dc3d07a749743172eec99d",
  measurementId: "G-R6HXG6DVKK"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialisising the variables
const auth = firebase.auth()
const database = firebase.database()



  
  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or password is incorrect, please try again')
      return
      // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(favourite_song) == false ||
     validate_field(milk_before_cereal) == false) {
      alert('One or more extra fields is incorrect, please try again')
      return
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email,
        full_name : full_name,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // Done
      alert('User Created Successfully')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is not valid')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      alert('User Logged In')
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    //The line above validates an email using regex symbols, returns true if email maches this format
    if (expression.test(email) == true) {
      // Valid email
      return true
    } else {
      // Invalid email
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }