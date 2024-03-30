// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set } from "firebase/database";

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDIoKtwOI2CxMJ3TYomJMJAf3ipspEXWvs",
//     authDomain: "vuejs-196a6.firebaseapp.com",
//     projectId: "vuejs-196a6",
//     storageBucket: "vuejs-196a6.appspot.com",
//     messagingSenderId: "158812742070",
//     appId: "1:158812742070:web:974240c46fb1e032eaa117",
//     measurementId: "G-9SYYDKN5RY"
// };

// const app = initializeApp(firebaseConfig);

// const database = getDatabase(app);

// set(ref(database, 'tasks'), {
//     username: 'name',
//     email: 'email',
//     profile_picture : 'imageUrl'
// });
 
// export default database;

import * as firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import "firebase/database";

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('tasks').set({
    username: 'edit test',
    email: 'email',
    profile_picture : 'imageUrl'
});

export default database;