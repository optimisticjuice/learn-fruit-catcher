import './App.scss'
import StartGame, {gameTime} from "./StartGame.jsx";
import GameTimer from "./GameTimer.jsx";
import Basket from "./Basket.jsx";
import RestartGame from './RestartGame.jsx';
import { useState } from 'react';

function App() {
    // state for the score
    const [score, setScore] = useState(0);
  
  // destructure the time, gameStarted and startTimer from the GameTimer
    const {time,gameStarted,startTimer,gameOver, resetGame} = GameTimer(gameTime);
    // return the App component
  return (
    // return the App component
    <div className='container'>
        {/* display the time */}
        <span className="time">Time: {time}</span>
        {/* display the StartGame component if the game is not started */}
        {!gameStarted && <StartGame startTimer={startTimer} />}
        {/* display the GameOver component if the game is over */}
        {gameOver && <RestartGame setScore={setScore} startTimer={startTimer} score={score} resetGame={resetGame}/>}
        {/* display the Basket component */}
        <Basket x={700} width={500} height={100}/>
        {/* Hardcoded the x , width and height for now (proof of concept works) */}
    </div>
  )
}

export default App
