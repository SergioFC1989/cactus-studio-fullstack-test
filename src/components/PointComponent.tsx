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
  <div className="px-10">
    {points.length
      ? points.map((point) => (
          <Image
            priority
            key={point.id}
            className="fixed w-10 h-10 object-cover hover:opacity-50 hover:cursor-pointer"
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
  </div>
);
