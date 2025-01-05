export interface Cell {
    value: 'X' | 'O' | null;
    isCorrect?: boolean;
  }
  
  export interface GridData {
    rows: string[];
    columns: string[];
    cells: Cell[][];
  }
  
  export interface Puzzle {
    id: string;
    level: number;
    story: string;
    clues: string[];
    grid: GridData;
  }
  