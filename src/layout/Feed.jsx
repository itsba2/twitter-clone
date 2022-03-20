import React from 'react';
import {
  EmojiIcon,
  GIFIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
  TopTweetsIcon,
} from '../icons/icons';
import walrusPhoto from '../images/walrus.png';

const Feed = () => {
  return (
    <main className="w-600 mx-3 border-x">
      <div className="h-12 flex justify-between items-center px-3 sticky top-0 bg-secondary-white">
        <div className="font-bold text-lg">Home</div>
        <div className="hover:bg-secondary-xxLightGray rounded-full flex justify-center items-center transform transition-colors duration-100 cursor-pointer p-2">
          <TopTweetsIcon iconDesign={'h-5 w-5 text-secondary-black'} />
        </div>
      </div>
      <div className="flex justify-between p-3 border-b">
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
      <div>Feed</div>
    </main>
  );
};

export default Feed;
