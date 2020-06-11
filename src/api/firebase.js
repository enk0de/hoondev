import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBO86R_-tKRPVboQPOzjXShV9boiBHFzj0',
  authDomain: 'hoondev-f55fa.firebaseapp.com',
  databaseURL: 'https://hoondev-f55fa.firebaseio.com',
  projectId: 'hoondev-f55fa',
  storageBucket: 'hoondev-f55fa.appspot.com',
  messagingSenderId: '925023299184',
  appId: '1:925023299184:web:3ded72fb89aabf89b636b5',
  measurementId: 'G-RKPCH35RPY',
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics().logEvent('A user entered the site.');

export const firestore = Firebase.firestore();
