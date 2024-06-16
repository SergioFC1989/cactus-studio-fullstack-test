"use server";

import { firebaseQuery } from "@/services/firebase/firebase-query";

export const getPoints = async () => {
  try {
    const response = await firebaseQuery("points");
    return response;
  } catch (error) {
    throw new Error("Error fetching points data");
  }
};

export const getMaterials = async () => {
  try {
    const response = await firebaseQuery("materials");
    return response;
  } catch (error) {
    throw new Error("Error fetching materials data");
  }
};
