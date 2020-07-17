import React from 'react'
import Square from './Square.js'


const style = {
    border: '5px solid darkblue',
    borderRadius: '10px',
    width: '500px',
    height: '500px',
    margin: '0 auto', //center the play fild
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)' //repeat 3 with 1 fragment (fr) 3 rolls 3 collums 
}

const Board = ({ squares, onClick }) => ( //We have the squares on the board. The squares have the X or O values
    <div style={style}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} /> //dont use index (i) as a key
        ))}
    </div>
)

export default Board