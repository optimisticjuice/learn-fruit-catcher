import './StartGame.scss';
export const gameTime = 3;
// export the StartGame component
export default function StartGame({startTimer}) {
    return (
        // return the StartGame component
        <div className="start-game">
            <h3 className="start-game-text">Start Game :</h3>
            {/* button to start the game */}
        <button className='start-button' onClick={() => {
            startTimer(); // This will start the timer by flipping the gameStarted state to true creating a casscade of events
        }}>Start Game</button>  
        </div>
    )
}
