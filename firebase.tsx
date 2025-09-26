import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyDTJsDVcAfo_8-4afTMiIa-1vCP5VioYns',
    authDomain: 'notificationtest-6a468.firebaseapp.com',
    projectId: 'notificationtest-6a468',
    storageBucket: 'notificationtest-6a468.firebasestorage.app',
    messagingSenderId: '886225299439',
    appId: '1:886225299439:web:5b35eb8c381a9aecb8b81a',
    measurementId: 'G-8X9W0KWL1D',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app);
export const db = getFirestore(app);
