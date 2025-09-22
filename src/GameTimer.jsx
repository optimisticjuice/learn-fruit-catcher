import { useEffect, useState } from "react";

export default function GameTimer(initialTime) {
    // initialTime is the time in seconds
    const [time, setTimer] = useState(initialTime);
    // gameStarted is used to control the timer
    const [gameStarted, setGameStarted] = useState(false);
    // game over state
    const [gameOver, setGameOver] = useState(false);
    useEffect(() => {
        // if the game is not started, do nothing and if the game is over, do nothing
        if (!gameStarted || gameOver) return;
        // if the time is 0, do nothing
        if (time === 0){
            setGameOver(true);
            return;
        } 
        // create the timerId and update the time every second
        const timerId = setInterval(() => {
            setTimer(time => time - 1);
        }, 1000);
        // clean up the timer when the component is unmounted
        return () => clearInterval(timerId);
    }, [time, gameStarted,gameOver]);
    // start the timer
    const startTimer = () => {
        setGameStarted(true);
    }
    // reset the game
    const resetGame = () => {
        setGameOver(false);
        setTimer(initialTime);
    }
    return {
      startTimer,
      time,
      gameStarted,
      gameOver,
      resetGame
    }
}