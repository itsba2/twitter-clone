import React from 'react';
import { DotDotDotIcon } from '../icons/icons';

const Trend = ({ topic, count, order }) => {
  return (
    <div className="flex justify-between p-3 hover:bg-secondary-xLightGray cursor-pointer">
      <div className="flex flex-col">
        <span className="text-xs text-secondary-darkGray">
          {order} · Trending
        </span>
        <span className="font-bold text-sm">{topic}</span>
        <span className="text-xs text-secondary-darkGray">{count} Tweets</span>
      </div>
      <div className="hover:bg-primary-medium text-secondary-black hover:text-primary-base h-7 w-7 flex justify-center items-center rounded-full transform transition-colors duration-100 py-2">
        <DotDotDotIcon iconDesign={'w-5 h-5'} />
      </div>
    </div>
  );
};

export default Trend;
