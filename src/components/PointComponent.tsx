import IconFingerPrint from "@/../public/finger-print.svg";
import { FirebasePointsData } from "@/app/api/firebase/types";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export const PointComponent = ({
  points,
  onChangePoints,
}: {
  points: FirebasePointsData[];
  onChangePoints: Dispatch<SetStateAction<string>>;
}) => (
  <>
    {points.length
      ? points.map((point) => (
          <Image
            priority
            key={point.id}
            className="fixed w-6 h-6 lg:w-10 lg:h-10 object-cover hover:opacity-50 hover:cursor-pointer"
            style={{
              top: `${point.data.coordY}%`,
              left: `${point.data.coordX}%`,
            }}
            src={IconFingerPrint}
            title={point.data.name}
            alt="finger-print-svg"
            onClick={() => onChangePoints(point.id)}
          />
        ))
      : null}
  </>
);
