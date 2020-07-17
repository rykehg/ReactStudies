import React, {useState} from 'react'
import {calculateWinner} from './helpers'
import Board from './Board.js'

const styles = {
    width: '200px',
    margin: '20px auto'
}
const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1)
        const current = timeInHistory[stepNumber]
        const square = [...current] //copy current push in the array 
        //if user click on occupied square of ig game win, return
        if (winner || square[i]){
            return
        }
        //Put an X or and O in the clcked square
        square[i] = xIsNext ? 'X': 'O'
        setHistory([...timeInHistory, square])
        setStepNumber(timeInHistory.length)
        setXisNext(!xIsNext)
    }

    const jumpTo = step => {
        setStepNumber(step)
        setXisNext(step % 2 === 0)
    }
    
    const renderMoves = () => 
         history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : 'Go to start'
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext? 'X' : 'O')}
                {renderMoves()}
            </div>
        </>
    )
}

export default Game