import GameTimer from "./GameTimer";
import {gameTime} from "./StartGame";
import "./RestartGame.scss";

export default function RestartGame({score,setScore,setGameOver}) {
    const {startTimer} = GameTimer(gameTime);
    const RestartGame = () => {
        setScore(0);
        startTimer();           
        setGameOver(false);
        
    }
    
    return (
        <div className="restart-game">
            <h3>Score: {score}</h3>
            <h3>Restart Game</h3>
            {/* button to restart the game */}
        <button className="restart-button"
           onClick={() => {
            RestartGame(); // This will restart the game by flipping the gameStarted state to true creating a casscade of events
        }}
        >Restart Game</button>  
        </div>
    )
}