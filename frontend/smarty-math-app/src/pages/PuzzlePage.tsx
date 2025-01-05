import React, { useState } from 'react';
import { Grid } from '../components/Grid/Grid';
import { Clues } from '../components/Clues/Clues';
import { Story } from '../components/Story/Story';
import { mockPuzzle } from '../mocks/puzzleData';
import { Cell } from '../types/types';

export const PuzzlePage: React.FC = () => {
  const [puzzle, setPuzzle] = useState(mockPuzzle);
  
  const handleCellClick = (row: number, col: number) => {
    const newCells = [...puzzle.grid.cells];
    const currentValue = newCells[row][col].value;
    
    // Cycle through null -> X -> O -> null
    let newValue: Cell['value'] = null;
    if (currentValue === null) newValue = 'X';
    else if (currentValue === 'X') newValue = 'O';
    
    newCells[row] = [...newCells[row]];
    newCells[row][col] = { value: newValue };
    
    setPuzzle({
      ...puzzle,
      grid: {
        ...puzzle.grid,
        cells: newCells
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Level {puzzle.level}</h1>
        <Story story={puzzle.story} />
        <Grid
          rows={puzzle.grid.rows}
          columns={puzzle.grid.columns}
          cells={puzzle.grid.cells}
          onCellClick={handleCellClick}
        />
        <Clues clues={puzzle.clues} />
      </div>
    </div>
  );
};
