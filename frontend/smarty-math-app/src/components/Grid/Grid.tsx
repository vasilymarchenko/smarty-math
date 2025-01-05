import React from 'react';
import { Cell } from '../../types/types';

interface GridProps {
  rows: string[];
  columns: string[];
  cells: Cell[][];
  onCellClick: (row: number, col: number) => void;
}

export const Grid: React.FC<GridProps> = ({ rows, columns, cells, onCellClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border"></th>
            {columns.map((col, i) => (
              <th key={i} className="p-2 border text-center min-w-[120px]">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="p-2 border font-medium">{row}</td>
              {cells[rowIndex].map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className="p-2 border text-center cursor-pointer hover:bg-gray-100"
                  onClick={() => onCellClick(rowIndex, colIndex)}
                >
                  {cell.value === 'X' && <span className="text-red-500">✗</span>}
                  {cell.value === 'O' && <span className="text-green-500">○</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};