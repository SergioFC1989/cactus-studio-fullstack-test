"use server";

import { firebaseQueryGetDocs } from "@/services/firebase/firebase-query";
import { PointsData } from "./types";

export const getPoints = async () => {
  try {
    const response = await firebaseQueryGetDocs("points");
    return response as PointsData[] | [];
  } catch (error) {
    throw new Error("Error fetching points data");
  }
};

export const getMaterials = async () => {
  try {
    const response = await firebaseQueryGetDocs("materials");
    return response;
  } catch (error) {
    throw new Error("Error fetching materials data");
  }
};
