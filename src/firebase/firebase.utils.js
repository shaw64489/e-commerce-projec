import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXeRpUtAmvSMRY1q5QfVHwd8CabPec4FE",
    authDomain: "crown-db-33782.firebaseapp.com",
    databaseURL: "https://crown-db-33782.firebaseio.com",
    projectId: "crown-db-33782",
    storageBucket: "crown-db-33782.appspot.com",
    messagingSenderId: "622819390855",
    appId: "1:622819390855:web:1ae67ec7b6e4bd43248f22",
    measurementId: "G-P0LNVKHHFD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;