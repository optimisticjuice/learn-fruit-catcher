import { useEffect, useState } from "react";
import MoveBasket from "./MoveBasket.jsx";

export default function GameTimer(initialTime, gameOver, setGameOver) {
    // initialTime is the time in seconds
    const [time, setTimer] = useState(initialTime);
    // gameStarted is used to control the timer
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        // if the game is not started, do nothing & gameOver is true, do nothing
        if (gameOver || !gameStarted) return;
        // if the time is 0, do nothing
        if (time === 0){
            // when the time is 0, set the game over to true that will trigger the restart game modal
            setGameOver(true);
            return;
        };
        // create the timerId and update the time every second
        const timerId = setInterval(() => {
            setTimer(time => time - 1);
        }, 1000);
        // clean up the timer when the component is unmounted
        return () => clearInterval(timerId);
    }, [time, gameStarted, gameOver]);
    
    // reset the timer
    const resetGame = () => {
        setTimer(initialTime);
        setGameStarted(true);
        setGameOver(false);
    }
    // start the timer
    const startTimer = () => {
        setGameStarted(true);
    }
    // move the basket
    MoveBasket(gameOver);
    return {
      startTimer,
      time,
      gameStarted,
      resetGame
    }
}