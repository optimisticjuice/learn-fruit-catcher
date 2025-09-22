import {useEffect, useState, useRef} from "react";
import {FRUIT_SIZE, getRandomX} from "./GameUtils";
export default function useFruitSpawning({ gameStarted, gameOver, gameWidth, gameHeight, basketX, basketWidth, basketHeight,fruitImages,setScore}) {  
    const [fruits, setFruits] = useState([]);  
    const fruitIdRef = useRef(0);  
    const fruitSpawnIndex = useRef(0);  
    const properBasketHeight = basketHeight - FRUIT_SIZE;
    const handleFruitCaught = () => {
        setScore((prevScore) => prevScore + 0.5);
      };

    // Fruit falling effect  
    useEffect(() => {  
      if (gameOver) return;  
        
      const fallInterval = setInterval(() => {
        setFruits((currentFruits) => {
          return currentFruits.reduce((newFruits, fruit) => {
            const newY = fruit.y + 5;
            
            // Check if caught by basket
            if (
              newY + FRUIT_SIZE >= gameHeight - properBasketHeight && // near basket height
              fruit.x + FRUIT_SIZE > basketX &&
              fruit.x < basketX + basketWidth
            ) {
              handleFruitCaught();
              return newFruits; // Don't add to new fruits (caught)
            } 
            
            // If still on screen, keep falling
            if (newY < gameHeight) {
              return [...newFruits, { ...fruit, y: newY }];
            }
            
            return newFruits; // Fruit fell off screen
          }, []);
        });
      }, 50);
      
      return () => clearInterval(fallInterval);
    }, [gameOver, gameHeight, basketX, basketWidth,handleFruitCaught]);
    
    // Fruit spawning effect
    useEffect(() => {
      if (gameOver || !gameStarted) return;
      
      const spawnInterval = setInterval(() => {  
        setFruits((currentFruits) => {  
          const image = fruitImages[fruitSpawnIndex.current % fruitImages.length];  
          fruitSpawnIndex.current++;  
          
          const x = getRandomX(gameWidth);  
          return [...currentFruits, { x, y: 0, id: fruitIdRef.current++, image }];  
        });  
      }, 1000);
      
      return () => clearInterval(spawnInterval);
    }, [gameOver, gameStarted, gameWidth, fruitImages]);  
    
    const resetFruits = () => {  
      setFruits([]);  
      fruitIdRef.current = 0;  
      fruitSpawnIndex.current = 0;  
    };  
    
    return {  
      fruits,  
      resetFruits  
    };  
  }