import { Puzzle } from '../types/types';

export const mockPuzzle: Puzzle = {
    id: "puzzle-1",
    level: 1,
    story: "Three men live in different houses...",
    clues: [
      "Mr. Orange lives in an orange house",
      "Mr. Blue doesn't live in a blue house"
    ],
    grid: {
      rows: ["Mr. Orange", "Mr. Blue", "Mr. Green"],
      columns: ["Orange House", "Blue House", "Green House"],
      cells: Array(3).fill(Array(3).fill({ value: null }))
    }
  };
