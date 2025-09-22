import "./RestartGame.scss";

export default function RestartGame({setScore,startTimer,score,resetGame}) {
    // restart the game
    const RestartGame = () => {
        // reset the score
        setScore(0);
        // StartTimer
        startTimer();
        // reset the game
        resetGame();
    }
    return (
        <div className="restart-modal">
            <span className="game-over">Game Over</span>
            <span className="score">Score: {score}</span>
            <h3>Restart Game</h3>
            {/* button to restart the game */}
        <button className="restart-button"
         onClick={() => {
            RestartGame(); // This will restart the game by flipping the gameStarted state to true creating a casscade of events
        }}>Restart Game</button>  
        </div>
    )
}