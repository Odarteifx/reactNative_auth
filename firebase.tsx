import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyD6yeQ1IX5eRLD3RXDoT0d03L_I5P8DfBs',
  authDomain: 'notificationtest-6a468.firebaseapp.com',
  databaseURL: 'https://notificationtest-6a468.firebaseio.com',
  projectId: 'notificationtest-6a468',
  storageBucket: 'notificationtest-6a468.appspot.com',
  messagingSenderId: '1065515692991',
  appId: '1:1065515692991:web:1744315a382166b160425a',
  measurementId: 'G-F888888888',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
