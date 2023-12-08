import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

//collection reference

const colRef = collection(db,"links")

export const addLink = (link,topic,tags) =>{

  const tagsArray = tags.split(',');
  console.log(tagsArray);


  return addDoc(colRef,{
    link: link,
    topic: topic,
    tags: tagsArray,
  })

}


export default app;