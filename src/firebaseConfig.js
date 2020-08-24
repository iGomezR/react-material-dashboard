import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDbPtjvzDOLapiPAI1KDr3VpIrO6rz3XXE',
//   authDomain: 'desmechado-api.firebaseapp.com',
//   databaseURL: 'https://desmechado-api.firebaseio.com',
//   projectId: 'desmechado-api',
//   storageBucket: 'desmechado-api.appspot.com',
//   messagingSenderId: '630510241298',
//   appId: '1:630510241298:web:6dbe35f8c912c79577facb'
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBFmOn-SXf2bnTfX5PJB-gk6K3FYF2ZpqA',
  authDomain: 'worki-96ed0.firebaseapp.com',
  databaseURL: 'https://worki-96ed0.firebaseio.com',
  projectId: 'worki-96ed0',
  storageBucket: 'worki-96ed0.appspot.com',
  messagingSenderId: '474145507394',
  appId: '1:474145507394:web:642b4bde4883d66ce805db',
  measurementId: 'G-CVH2L57KML'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth_ = firebase.auth();
export const auth = firebase.auth;
export const firestore = firebase.firestore();
