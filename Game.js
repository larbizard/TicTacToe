import './App.css';
import {useState } from 'react';

function Square(props) {  
  return (
      <button className="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i) => {
    const  squarestemp = squares.slice();
    squarestemp[i] = xIsNext ? 'X' : 'O';
    setSquares(squarestemp);
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]}
    onClick={() => handleClick(i) }/>
  }

  return (
    <div className="App">
      <div>
        <div className="status">Next Player: {xIsNext ? 'X' : 'O'}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

function Game(){

    return (
      <div className="game">
        <div className="game-board">
          <App />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
}
export default Game;
