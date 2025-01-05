import React from 'react';

interface StoryProps {
  story: string;
}

export const Story: React.FC<StoryProps> = ({ story }) => {
  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow">
      <h2 className="font-bold mb-2">Story</h2>
      <p>{story}</p>
    </div>
  );
};