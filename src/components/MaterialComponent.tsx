import { FirebaseMaterialsData } from "@/app/api/firebase/types";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export const MaterialComponent = ({
  materials,
  onChangeMaterials,
}: {
  materials: FirebaseMaterialsData[];
  onChangeMaterials: Dispatch<SetStateAction<string>>;
}) => {
  return materials.length ? (
    <div className="fixed py-10">
      <div className="min-w-44 lg:min-w-60 flex flex-col justify-center gap-10 p-5 bg-opacity-20 bg-black rounded-sm">
        {materials.map((material) => (
          <div className="flex flex-col items-center gap-2" key={material.id}>
            <Image
              width={100}
              height={100}
              className="w-16 h-16 lg:w-28 lg:h-28 rounded-sm hover:opacity-50 hover:cursor-pointer"
              src={material.data.materialPreview}
              alt={material.data.name}
              onClick={() =>
                onChangeMaterials(material.data.layers[material.data.points[0]])
              }
            />
            <p className="text-xs lg:text-base">{material.data.name}</p>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};
