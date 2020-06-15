import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAGVCluFQ_QpJQWEBF0d6K9BUtikb8Ppws",
    authDomain: "dvara-d21f8.firebaseapp.com",
    databaseURL: "https://dvara-d21f8.firebaseio.com",
    projectId: "dvara-d21f8",
    storageBucket: "dvara-d21f8.appspot.com",
    messagingSenderId: "1080038095458",
    appId: "1:1080038095458:web:c075d3bab0beac89712f3b",
    measurementId: "G-RRG2HLS7LS"

};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;