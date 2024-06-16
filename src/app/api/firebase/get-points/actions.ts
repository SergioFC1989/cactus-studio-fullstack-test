"use server";

import { db } from "@/services/firebase/firebase-client";
import { collection, getDocs } from "firebase/firestore";
import { FirebasePointsData } from "../types";
import { serializeQuerySnapshot } from "../utils";

export const getPoints = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "points"));
    const data = serializeQuerySnapshot(querySnapshot);
    return data as FirebasePointsData[] | [];
  } catch (error) {
    throw new Error("Error fetching points data");
  }
};
