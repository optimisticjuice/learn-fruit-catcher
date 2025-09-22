import './App.scss'
import StartGame, {gameTime} from "./StartGame.jsx";
import GameTimer from "./GameTimer.jsx";
import Basket from "./Basket.jsx";
import { useState } from "react";
import RestartGame from "./RestartGame.jsx";
import MoveBasket from "./MoveBasket.jsx";

function App() {
  // Basket Width:
   const basketWidth = 500;
  
  // state the game over now
  const [gameOver, setGameOver] = useState(false);
  
  // state the score now
  const [score, setScore] = useState(0);
  
  // destructure the time, gameStarted and startTimer from the GameTimer
  const {time,gameStarted,startTimer, resetGame, gameOvers} = GameTimer(gameTime, gameOver, setGameOver);
  
   const {basketX} = MoveBasket(gameOvers, basketWidth);  

  // return the App component
  return (
    // return the App component
    <div className='container'>
        {/* display the time */}
        <span className="time">Time: {time}</span>
        {/* display the StartGame component if the game is not started */}
        {!gameStarted && <StartGame startTimer={startTimer} />}
        {/* display the RestartGame component if the game is over */}
        {gameOver && <RestartGame score={score} setScore={setScore} resetGame={resetGame}/>}
        {/* display the Basket component */}
        <Basket x={basketX} width={basketWidth} height={100}/>
    </div>
  )
}

export default App
