import { getFirestore } from "firebase/firestore";
import firebaseApp from "./firebaseClient";

const db = getFirestore(firebaseApp);
export default db;
