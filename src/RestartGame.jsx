import GameTimer from "./GameTimer";
import {gameTime} from "./StartGame";
import "./RestartGame.scss";

export default function RestartGame({score,setScore, resetGame}) {
    const {startTimer} = GameTimer(gameTime);
    const RestartGame = () => {
        setScore(0);
        startTimer();           
        resetGame();
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