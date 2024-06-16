import { DocumentData, QuerySnapshot } from "firebase/firestore";

export const serializeQuerySnapshot = (
  querySnapshot: QuerySnapshot<DocumentData, DocumentData>
) => {
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
  return data;
};
