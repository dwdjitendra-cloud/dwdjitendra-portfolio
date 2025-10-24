// Ambient module declarations to satisfy TypeScript during build
// These map to real runtime modules; we intentionally relax types here.

declare module "@react-three/fiber" {
  export const Canvas: any;
  export const useFrame: any;
  export const useThree: any;
  export const extend: any;
}

declare module "@react-three/drei" {
  export const Box: any;
  export const Sphere: any;
  export const Torus: any;
}

// Allow JSX intrinsic elements used by @react-three/fiber
declare global {
  // TS <=5 React 18 style augmentation
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      ambientLight: any;
      pointLight: any;
      meshStandardMaterial: any;
    }
  }
  // TS 5 / React 19 JSX runtime augmentation
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        group: any;
        ambientLight: any;
        pointLight: any;
        meshStandardMaterial: any;
      }
    }
  }
}
