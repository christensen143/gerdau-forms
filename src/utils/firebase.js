import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCfCKE06gyujp4YMOzvf2ndL7d7f9_iba0',
  authDomain: 'gerdau-forms.firebaseapp.com',
  databaseURL: 'https://gerdau-forms.firebaseio.com',
  projectId: 'gerdau-forms',
  storageBucket: 'gerdau-forms.appspot.com',
  messagingSenderId: '336791226578',
  appId: '1:336791226578:web:84b67e87b2da58214a050b',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();
