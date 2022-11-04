import { createContext, ReactNode, useContext, useState } from "react";

export interface carouselContextValueConfig {
  navigation?: number;
  setNavigation?: (props: number) => void;
}

interface CarouselContextConfig {
  children?: ReactNode;
}

export const CarouselContextValue = createContext<carouselContextValueConfig>({});


export function CarouselContext({ children }: CarouselContextConfig) {
  const [navigation, setNavigation] = useState<number>(0);
  return (
    <CarouselContextValue.Provider
      value={{
        navigation,
        setNavigation,
      }}
    >
      {children}
    </CarouselContextValue.Provider>
  );
}
