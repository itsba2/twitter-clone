import React from 'react';

const Follow = ({ photo, twitterName, username, isFollower }) => {
  return (
    <div className="flex justify-between items-center p-3 cursor-pointer hover:bg-secondary-xLightGray">
      <img
        className="flex items-center mr-2 w-11 h-11 rounded-full"
        src={photo}
        alt=""
      />
      <div className="flex flex-col justify-start mr-auto">
        <span className="font-bold text-sm">
          {twitterName.length >= 17
            ? `${twitterName.slice(0, 14)}...`
            : twitterName}
        </span>
        <span className="text-sm text-secondary-darkGray">
          {username.length >= 8
            ? `@${username.slice(0, 5)}...`
            : `@${username}`}
          {isFollower ? (
            <span className="bg-secondary-xLightGray rounded-sm px-1 ml-1 text-xs">
              Follows you
            </span>
          ) : (
            ''
          )}
        </span>
      </div>
      <button
        type="button"
        className="bg-secondary-black hover:bg-gray-800 text-secondary-white text-sm font-semibold rounded-full px-3 py-1"
      >
        Follow
      </button>
    </div>
  );
};

export default Follow;
