export interface TurntableFrame {
  angle: number; // 0 to 359
  src: string;
  label: string;
}

export interface DesignHotspot {
  id: string;
  title: string;
  detail: string;
  xPercent: number;
  yPercent: number;
  minAngle: number;
  maxAngle: number;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  rationale: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
}

export type ProjectCategory =
  | 'جاكيتات'
  | 'معاطف'
  | 'هوديز'
  | 'كنزات'
  | 'تيشيرتات';

export interface DesignProject {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  subCategory: string;
  year: string;
  role: string;
  summary: string;
  conceptAndProblem: {
    concept: string;
    problemSolved: string;
  };
  inspiration: string;
  stages: ProcessStage[];
  materialsAndTech: {
    materials: string;
    weight: string;
    lining: string;
    techniques: string[];
  };
  colorPalette: ColorSwatch[];
  gallery: string[];
  supports360: boolean;
  turntableFrames?: TurntableFrame[];
  designHotspots?: DesignHotspot[];
  featuredInHero?: boolean;
}
