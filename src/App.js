import Board from './Board'
import React, { useEffect, useState } from 'react';

function App() {

  const [board, setBoard] = useState([
    [1,2],
    [3,4]
  ])

  useEffect(() => {
    //create a new board for minesweeper
    const newBoard = [];
    let counter = 1;

    // iterate 10 times to fill rows
    for(let row =0; row < 10; row++) {
      let row = [];
      // iterate 10 times to fill the columns
      for(let column = 0; column < 10; column++){
        row.push(counter);
        counter++;
      }
      newBoard.push(row);
    }
    setBoard(newBoard)
  }, [])

  return (
    <div>
      <Board board={board} />
    </div>
  );
}

export default App;