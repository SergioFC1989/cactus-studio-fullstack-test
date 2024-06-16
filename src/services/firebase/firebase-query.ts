import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-client";
import { CollectionName } from "./type";

export const firebaseQuery = async (collectionName: CollectionName) => {
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
