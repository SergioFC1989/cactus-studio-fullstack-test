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
    <div className="fixed mx-2 my-4">
      <div className="flex min-w-44 flex-col justify-center gap-10 p-5 bg-opacity-20 bg-black rounded-sm">
        {materials.map((material) => (
          <div className="flex flex-col items-center gap-2" key={material.id}>
            <Image
              width={10}
              height={10}
              className="w-28 h-28 rounded-sm hover:opacity-50 hover:cursor-pointer"
              src={material.data.materialPreview}
              alt={material.data.name}
              onClick={() =>
                onChangeMaterials(material.data.layers[material.data.points[0]])
              }
            />
            <h2>{material.data.name}</h2>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};
