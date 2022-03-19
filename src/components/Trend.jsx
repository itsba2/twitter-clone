import React from 'react';
import { DotDotDotIcon } from '../icons/icons';

const Trend = ({ topic, count, order }) => {
  return (
    <div className="flex justify-between p-3 hover:bg-secondary-xLightGray cursor-pointer">
      <div className="flex flex-col">
        <span className="text-xs text-secondary-darkGray">
          {order} - Trending
        </span>
        <span className="font-bold text-sm">{topic}</span>
        <span className="text-xs text-secondary-darkGray">{count} Tweets</span>
      </div>
      <div>
        <DotDotDotIcon
          iconDesign={
            'w-5 h-5 text-secondary-black hover:rounded-full hover:bg-primary-light hover:text-primary-base'
          }
        />
      </div>
    </div>
  );
};

export default Trend;
