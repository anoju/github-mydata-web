import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB7Eo3n88a76cOn5ZW2e50RCpKhAW-Q4q0',
  authDomain: 'kb-stock-mydata.firebaseapp.com',
  projectId: 'kb-stock-mydata',
  storageBucket: 'kb-stock-mydata.appspot.com',
  messagingSenderId: '638872303611',
  appId: '1:638872303611:web:f1c115ea9d32cb07ca7d5e',
  measurementId: 'G-44SSWRPFLQ',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
