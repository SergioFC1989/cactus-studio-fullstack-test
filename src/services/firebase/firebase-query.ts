import { collection, getDocs } from "firebase/firestore";
import { FirebaseCollectionName } from "../type";
import { db } from "./firebase-client";

export const firebaseQueryGetDocs = async (
  collectionName: FirebaseCollectionName
) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return data;
  } catch (error) {
    throw new Error("Error fetching data from Firestore");
  }
};
