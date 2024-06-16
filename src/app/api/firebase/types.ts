export interface FirebasePointsData {
  id: string;
  data: {
    coordX: number;
    coordY: number;
    name: string;
  };
}

export interface FirebaseMaterialsData {
  id: string;
  data: {
    points: string[];
    materialPreview: string;
    name: string;
    layers: Record<string, string>;
  };
}
