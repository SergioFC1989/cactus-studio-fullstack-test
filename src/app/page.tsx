import { ImageLayoutComponent } from "@/components/ImageLayoutComponent";
import { Suspense } from "react";

const ImageLayout = () => (
  <div className="w-full h-full">
    <Suspense
      fallback={
        <div className="absolute bg-green w-full h-full">
          HOLAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
      }
    >
      <ImageLayoutComponent />
    </Suspense>
  </div>
);

export default ImageLayout;
