import { getPoints } from "@/app/(api)/(firebase)/actions";
import { PointsData } from "@/app/(api)/(firebase)/types";
import { useCallback, useEffect, useState } from "react";

const URL_BASE_IMAGE = `https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=${process.env.FIREBASE_TOKEN}`;

export const useImageLayout = () => {
  const [image, setImage] = useState<string>(URL_BASE_IMAGE);
  const [points, setPoints] = useState<PointsData[]>([]);
  const [selectPointId, setSelectPointId] = useState([]);

  const handleGetPoints = useCallback(async () => {
    try {
      const response = await getPoints();
      setPoints(response);
    } catch (error) {
      console.log(error);
      return error;
    }
  }, []);

  useEffect(() => {
    !points.length && handleGetPoints();
  }, [handleGetPoints, points.length]);

  return { image, points };
};
