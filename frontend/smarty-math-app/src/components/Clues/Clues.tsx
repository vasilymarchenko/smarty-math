import React from 'react';

interface CluesProps {
  clues: string[];
}

export const Clues: React.FC<CluesProps> = ({ clues }) => {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="font-bold mb-2">Clues:</h3>
      <ol className="list-decimal list-inside">
        {clues.map((clue, index) => (
          <li key={index} className="mb-2">{clue}</li>
        ))}
      </ol>
    </div>
  );
};
