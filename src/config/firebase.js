import * as Firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDwYNw0JUe2VYzpC995n1qustu-CnVZ8QI',
  authDomain: 'bloodbankapp-1.firebaseapp.com',
  databaseURL: 'https://bloodbankapp-1-default-rtdb.firebaseio.com',
  projectId: 'bloodbankapp-1',
  storageBucket: 'bloodbankapp-1.appspot.com',
  messagingSenderId: '155895906369',
  appId: '1:155895906369:web:23b4e5816091f63aa806c0',
  measurementId: 'G-2H8YSX929C',
};
// Initialize Firebase
export default Firebase.initializeApp(firebaseConfig);
