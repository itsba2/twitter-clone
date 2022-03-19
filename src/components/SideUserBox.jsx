import React from 'react';
import { DotDotDotIcon } from '../icons/icons';
import walrusPhoto from '../images/walrus.png';

const SideUserBox = () => {
  return (
    <div className="flex justify-between items-center h-16 mb-6 px-3 cursor-pointer rounded-full hover:bg-secondary-xLightGray">
      <img
        className="flex items-center mr-2 w-11 h-11 rounded-full"
        src={walrusPhoto}
        alt=""
      />
      <div className="flex flex-col justify-start mr-auto">
        <span className="font-bold">Walrus</span>
        <span>@walrus</span>
      </div>
      <div></div>
      <DotDotDotIcon iconDesign={'h-5 w-5 text-secondary-black justify-end'} />
    </div>
  );
};

export default SideUserBox;
