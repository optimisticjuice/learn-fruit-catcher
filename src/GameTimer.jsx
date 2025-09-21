import { useEffect, useState } from "react";

export default function GameTimer(initialTime) {
    // initialTime is the time in seconds
    const [time, setTimer] = useState(initialTime);
    // gameStarted is used to control the timer
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        // if the game is not started, do nothing
        if (!gameStarted) return;
        // if the time is 0, do nothing
        if (time === 0) return;
        // create the timerId and update the time every second
        const timerId = setInterval(() => {
            setTimer(time => time - 1);
        }, 1000);
        // clean up the timer when the component is unmounted
        return () => clearInterval(timerId);
    }, [time, gameStarted]);
    // start the timer
    const startTimer = () => {
        setGameStarted(true);
    }
    return {
      startTimer,
      time,
      gameStarted
    }
}