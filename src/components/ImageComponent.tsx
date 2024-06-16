"use client";

import IconFingerPrint from "@/../public/finger-print.svg";
import { useImageLayout } from "@/hooks/useImageLayout";
import Image from "next/image";
import { Suspense } from "react";

export const ImageComponent = () => {
  const { image, points } = useImageLayout();

  return (
    <>
      <Suspense
        fallback={
          <h1 id="ola" className="fixed">
            Hola guarras
          </h1>
        }
      >
        <Image fill src={image} alt="image" />
        <div>
          {points.map((point) => (
            <div key={point.id}>
              <button
                className="fixed hover:opacity-50"
                title={point.data.name}
                style={{
                  top: `${point.data.coordY}%`,
                  left: `${point.data.coordX}%`,
                }}
              >
                <Image
                  className="w-10"
                  src={IconFingerPrint}
                  alt="finger-print-svg"
                />
              </button>
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
};
