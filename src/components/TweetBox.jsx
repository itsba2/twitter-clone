import React from 'react';
import walrusPhoto from '../images/walrus.png';

import {
  EmojiIcon,
  GIFIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
} from '../icons/icons';

const TweetBox = () => {
  return (
    <div className="flex justify-between p-3 border-b mb-1">
      <img
        className="flex items-center mr-2 w-11 h-11 rounded-full cursor-pointer"
        src={walrusPhoto}
        alt=""
      />
      <div className="w-full flex flex-col">
        <textarea
          className="h-14 w-full mx-2 resize-none outline-none scroll-m-0"
          placeholder="What's happening?"
          cols="30"
          rows="10"
          maxLength={280}
        ></textarea>
        <div className="flex justify-between">
          <div className="flex items-center cursor-pointer">
            <div className="hover:bg-primary-light rounded-full transform transition-colors duration-100 py-2">
              <MediaIcon iconDesign={`h-4 w-4 text-primary-base mx-2`} />
            </div>
            <div className="hover:bg-primary-light rounded-full transform transition-colors duration-100 py-2">
              <GIFIcon iconDesign={`h-4 w-4 text-primary-base mx-2`} />
            </div>
            <div className="hover:bg-primary-light rounded-full transform transition-colors duration-100 py-2">
              <PollIcon iconDesign={`h-4 w-4 text-primary-base mx-2`} />
            </div>
            <div className="hover:bg-primary-light rounded-full transform transition-colors duration-100 py-2">
              <EmojiIcon iconDesign={`h-4 w-4 text-primary-base mx-2`} />
            </div>
            <div className="hover:bg-primary-light rounded-full transform transition-colors duration-100 py-2">
              <ScheduleIcon iconDesign={`h-4 w-4 text-primary-base mx-2`} />
            </div>
            <div className="hover:bg-primary-light rounded-full transform transition-colors duration-100 py-2">
              <LocationIcon iconDesign={`h-4 w-4 text-primary-base mx-2`} />
            </div>
          </div>
          <button
            type="button"
            className="bg-primary-base hover:bg-primary-dark rounded-full px-3 py-2 text-secondary-white text-sm font-bold flex justify-center items-center"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
