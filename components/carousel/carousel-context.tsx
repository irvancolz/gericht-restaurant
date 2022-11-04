import { createContext, ReactNode, useState } from "react";

export interface carouselConfig {
  navigation?: number;
  maxSlide?: number;
  setNavigation?: (props: number) => void;
  setMaxSlide?: (props: number) => void;
}

interface CarouselContextConfig {
  children?: ReactNode;
}

export const CarouselContextValue = createContext<carouselConfig>({});
export type carouselContextValueConfig = typeof CarouselContextValue;

export function CarouselContext({ children }: CarouselContextConfig) {
  const [navigation, setNavigation] = useState<number>(0);
  const [maxSlide, setMaxSlide] = useState<number>(0);
  return (
    <CarouselContextValue.Provider
      value={{
        navigation,
        setNavigation,
        maxSlide,
        setMaxSlide
      }}
    >
      {children}
    </CarouselContextValue.Provider>
  );
}
