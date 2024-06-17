"use client";

import { useImageLayout } from "@/hooks/useImageLayout";
import Image from "next/image";
import { MaterialComponent } from "./MaterialComponent";
import { PointComponent } from "./PointComponent";

export const ImageLayoutComponent = () => {
  const {
    images,
    points,
    setSelectPointId,
    materials,
    setSelectMaterialLayer,
  } = useImageLayout();

  return (
    <div className="w-full h-full -z-10 px-10">
      {images.map((image: string, id: number) => (
        <Image fill className="p-10" key={id} src={image} alt="image" />
      ))}
      <PointComponent points={points} onChangePoints={setSelectPointId} />
      <MaterialComponent
        materials={materials}
        onChangeMaterials={setSelectMaterialLayer}
      />
    </div>
  );
};
