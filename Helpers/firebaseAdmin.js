import * as firebaseAdmin from "firebase-admin";
import data from "../utils/kookers-4e54e-firebase-adminsdk-wjloi-73617291d1.json"


export default function FirebaseAdminClient(){
    if(!firebaseAdmin.apps.length){
      firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(data),
        databaseURL: process.env.NEXT_PUBLIC_firebase_databaseURL
      })
    }
  }