import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyBON7WTFrkhie0xyqRt6bTE6ZjQN7c2YSs",
    authDomain: "stubu-test.firebaseapp.com",
    databaseURL: "https://stubu-test.firebaseio.com",
    projectId: "stubu-test",
    storageBucket: "",
    messagingSenderId: "616388801472"
  });

  export const db = app.database();
  export const usersRef = db.ref('users');