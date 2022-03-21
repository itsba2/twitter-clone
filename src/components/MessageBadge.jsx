import React from 'react';

const MessageBadge = () => {
  return (
    <div className="bg-primary-base w-4 h-4 rounded-full relative bottom-2 right-3 flex justify-center items-center ring-1 ring-secondary-white">
      <span className="text-secondary-white text-2xs">2</span>
    </div>
  );
};

export default MessageBadge;
