import './App.scss'
import StartGame, {gameTime} from "./StartGame.jsx";
import GameTimer from "./GameTimer.jsx";
import Basket from "./Basket.jsx";
function App() {
  // destructure the time, gameStarted and startTimer from the GameTimer
    const {time,gameStarted,startTimer} = GameTimer(gameTime);
    // return the App component
  return (
    // return the App component
    <div className='container'>
        {/* display the time */}
        <span className="time">Time: {time}</span>
        {/* display the StartGame component if the game is not started */}
        {!gameStarted && <StartGame startTimer={startTimer} />}
        {/* display the Basket component */}
        <Basket x={700} width={500} height={100}/>
        {/* Hardcoded the x , width and height for now (proof of concept works) */}
    </div>
  )
}

export default App
