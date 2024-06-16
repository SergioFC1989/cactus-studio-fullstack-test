import { getMaterials } from "@/app/api/firebase/get-materials/actions";
import { getPoints } from "@/app/api/firebase/get-points/actions";
import {
  FirebaseMaterialsData,
  FirebasePointsData,
} from "@/app/api/firebase/types";
import { useCallback, useEffect, useState } from "react";

const URL_BASE_IMAGE = `https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554`;

export const useImageLayout = () => {
  const [images, setImages] = useState<string[]>([URL_BASE_IMAGE]);
  const [points, setPoints] = useState<FirebasePointsData[]>([]);
  const [selectPointId, setSelectPointId] = useState<string>("");
  const [materials, setMaterials] = useState<FirebaseMaterialsData[]>([]);
  const [selectMaterialLayer, setSelectMaterialLayer] = useState<string>("");

  const handleGetPoints = useCallback(async () => {
    try {
      const response = await getPoints();
      setPoints(response);
    } catch (error) {
      console.error(error);
      return error;
    }
  }, []);

  const handleGetMaterials = useCallback(async () => {
    try {
      const response = await getMaterials(selectPointId);
      setMaterials(response);
    } catch (error) {
      console.error(error);
      return error;
    }
  }, [selectPointId]);

  const handleMountLayerInImage = useCallback(() => {
    selectMaterialLayer &&
      setImages((prev: string[]) => [...prev, selectMaterialLayer]);
  }, [selectMaterialLayer]);

  useEffect(() => {
    !points.length && handleGetPoints();
  }, [handleGetPoints, points.length]);

  useEffect(() => {
    handleGetMaterials();
  }, [handleGetMaterials]);

  useEffect(() => {
    handleMountLayerInImage();
  }, [handleMountLayerInImage]);

  return {
    images,
    points,
    setSelectPointId,
    materials,
    setSelectMaterialLayer,
  };
};
