import './App.scss'
import StartGame, {gameTime} from "./StartGame.jsx";
import GameTimer from "./GameTimer.jsx";
import Basket from "./Basket.jsx";
import { useState } from "react";
import RestartGame from "./RestartGame.jsx";
import MoveBasket from "./MoveBasket.jsx";
import useFruitSpawning from './FruitSpawning.jsx';
import useWindowDimensions from './Dimensions.jsx';
import { fruitImages } from './GameUtils.js';
import Fruit from "./Fruit.jsx";
import backgroundMusic from "./assets/background-music.mp3";
import AudioManager from "./AudioManager.jsx";

function App() {
  const volumeLevel = 5;
  // Basket Width:
   const basketWidth = 500;
   const basketHeight = 100;
  const {width, height} = useWindowDimensions();   


  // state the game over now
  const [gameOver, setGameOver] = useState(false);
  
  // state the score now
  const [score, setScore] = useState(0);
  
  const { audioRef, startMusic, pauseMusic } = AudioManager(volumeLevel);

  // destructure the time, gameStarted and startTimer from the GameTimer
  const {time,gameStarted,startTimer, resetGame, gameOvers} = GameTimer(gameTime, gameOver, setGameOver);
  
   const {basketX} = MoveBasket(gameOvers, basketWidth);  

   const { fruits, resetFruits} = useFruitSpawning({  
    gameStarted,   
    gameOver,   
    gameWidth: width,
    gameHeight: height,
    basketX,
    basketWidth,
    basketHeight,
    fruitImages,
    setScore
  });
//  if the game is over pause the music
  if(gameOver){
    pauseMusic();
  }
  // 
 
   // return the App component
  return (
    // return the App component
    <div className='container'>
      <audio ref={audioRef} src={backgroundMusic} />
        {/* display the time */}
        <span className="time">Time: {time}</span>
        <span className="score">Score: {score}</span>
        {/* display the StartGame component if the game is not started */}
        {!gameStarted && <StartGame startTimer={startTimer} startMusic={startMusic} />}
        {/* display the RestartGame component if the game is over */}
        {gameOver && <RestartGame score={score} setScore={setScore} resetGame={resetGame} resetFruits={resetFruits} startMusic={startMusic}/>}
        
        {/* display the fruits */}
        {fruits.map(({id, x, y, image}) => (
          <Fruit key={id} x={x} y={y} image={image} />
        ))}
        
        {/* display the Basket component */}
        <Basket x={basketX} width={basketWidth} height={basketHeight}/>
    </div>
  )
}

export default App
