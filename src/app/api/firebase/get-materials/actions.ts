"use server";

import { db } from "@/services/firebase/firebase-client";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FirebaseMaterialsData } from "../types";
import { serializeQuerySnapshot } from "../utils";

export const getMaterials = async (selectPointId: string) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "materials"), where("points", "==", [selectPointId]))
    );
    const data = serializeQuerySnapshot(querySnapshot);
    return data as FirebaseMaterialsData[] | [];
  } catch (error) {
    throw new Error("Error fetching materials data");
  }
};
