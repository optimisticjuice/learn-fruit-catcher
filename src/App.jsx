import './App.css'
import StartGame, {gameTime} from "./StartGame.jsx";
import GameTimer from "./GameTimer.jsx";
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
    </div>
  )
}

export default App
