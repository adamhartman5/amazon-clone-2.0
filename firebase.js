var firebaseConfig = {
  apiKey: "AIzaSyDk5oh77cxGbpMpI5huGj3bmIf_pSoVhks",
  authDomain: "clone-two-39d03.firebaseapp.com",
  projectId: "clone-two-39d03",
  storageBucket: "clone-two-39d03.appspot.com",
  messagingSenderId: "378610183471",
  appId: "1:378610183471:web:2a19630c689e6f7bbe05da",
  measurementId: "G-98LW7GBHTF"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();