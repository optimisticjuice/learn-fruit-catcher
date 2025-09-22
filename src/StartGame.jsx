import './StartGame.scss';
export const gameTime = 83;
// export the StartGame component
export default function StartGame({startTimer}) {
    return (
        // return the StartGame component
        <div className="start-game">
            <h3>Start Game :</h3>
            {/* button to start the game */}
        <button onClick={() => {
            startTimer(); // This will start the timer by flipping the gameStarted state to true creating a casscade of events
        }}>Start Game</button>  
        </div>
    )
}
