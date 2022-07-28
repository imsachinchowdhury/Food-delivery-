import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDesn-nsRIoALVDNod6sb9oEE8OHL6NLto",
    authDomain: "restaurentapp-695a6.firebaseapp.com",
    databaseURL: "https://restaurentapp-695a6-default-rtdb.firebaseio.com",
    projectId: "restaurentapp-695a6",
    storageBucket: "restaurentapp-695a6.appspot.com",
    messagingSenderId: "904570397780",
    appId: "1:904570397780:web:406162132af11dec6639c1"
  };


const app = getApps.length>0 ? getApp() :initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
export {app,firestore,storage};