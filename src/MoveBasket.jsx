import { useCallback, useEffect, useState } from 'react';  
import useWindowDimensions from './Dimensions';
export const basketMoveWidth = 10;

export default function useBasketControls(  
  gameOvers, basketWidth  
) {  
    const { width, height } = useWindowDimensions();
    const basketWidth1 = basketWidth; // Calculate 20% of current game width
     const [basketX, setBasketX] = useState(width  / 2 - basketWidth1 / 2); // Center the basket
     
     const moveBasket = useCallback(  
    (e) => {  
      if (gameOvers) return;  
    
      if (e.key === "ArrowLeft") {  
        setBasketX((x) => Math.max(0, x - basketMoveWidth));  
      } else if (e.key === "ArrowRight") {  
        setBasketX((x) => Math.min(width - basketWidth1, x + basketMoveWidth));  
      }
    },  
    [gameOvers,setBasketX, basketWidth1, width]  
  );  
  useEffect(() => {  
    window.addEventListener("keydown", moveBasket);  
    return () => window.removeEventListener("keydown", moveBasket);  
  }, [moveBasket]);     

  useEffect(() => {
    setBasketX(width / 2 - basketWidth1 / 2);
  }, [width, basketWidth1]);

  return {  
    moveBasket, // Export in case you need direct access
    basketX  
  };  
}