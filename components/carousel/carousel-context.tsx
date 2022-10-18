import { createContext, ReactNode, useContext, useState } from "react";

interface carouselConfig{
    navigation?: number;
    setNavigation?: (props:number) => void;
}

interface CarouselContextConfig{
    children?: ReactNode;
}

const CarouselContextValue = createContext<carouselConfig>({});

export function useCarousel(){
    return useContext(CarouselContextValue);
}

export function CarouselContext({children}:CarouselContextConfig){
    const [navigation, setNavigation] = useState<number>(0);
    return(
        <CarouselContextValue.Provider value={{
            navigation, setNavigation
        }}>
            {children}
        </CarouselContextValue.Provider>
    )
}