import React, { useState } from 'react';
import {
  DotDotDotIcon,
  LikedIcon,
  LikeIcon,
  ReplyIcon,
  RetweetIcon,
  ShareIcon,
  VerifiedIcon,
} from '../icons/icons';

const TweetInFeed = ({
  photo,
  twitterName,
  username,
  isVerified,
  timeAgo,
  content,
  attachedPhoto,
  replyCount,
  retweetCount,
  retweeted,
  likeCount,
  liked,
}) => {
  return (
    <div className="flex border-b cursor-pointer hover:bg-secondary-xxLightGray">
      <div className="flex justify-center items-start px-2 py-3 w-20">
        <img className="rounded-full hover:opacity-70 " src={photo} alt="" />
      </div>
      <div className="py-3 pl-2 pr-4 w-full">
        <div className="flex justify-between">
          <div className="flex items-center text-sm">
            <span className="mx-0.5 font-bold hover:underline">
              {twitterName.length >= 20
                ? `${twitterName.slice(0, 17)}...`
                : twitterName}
            </span>
            <span className="mx-0.5">
              {isVerified ? (
                <VerifiedIcon iconDesign={'h-5 w-5 text-primary-base'} />
              ) : (
                ''
              )}
            </span>
            <span className="mx-0.5 text-secondary-darkGray">
              {username.length >= 11
                ? `@${username.slice(0, 8)}...`
                : `@${username}`}
            </span>
            <span className="mx-0.5">·</span>
            <span className="mx-0.5 text-secondary-darkGray hover:underline">
              {timeAgo}
            </span>
          </div>
          <div className="hover:bg-primary-medium text-secondary-black hover:text-primary-base h-7 w-7 flex justify-center items-center rounded-full transform transition-colors duration-100 py-2">
            <DotDotDotIcon iconDesign={'w-5 h-5'} />
          </div>
        </div>
        <p>{content}</p>
        <img className="rounded-2xl my-3" src={attachedPhoto} alt="" />
        <div className="flex justify-between mr-20 text-secondary-darkGray transform transition-colors duration-100">
          <span className="flex items-center hover:text-primary-base group">
            <div className="group-hover:bg-primary-medium text-secondary-darkGray group-hover:text-primary-base h-6 w-6 flex justify-center items-center rounded-full transform transition-colors duration-100 py-2">
              <ReplyIcon iconDesign={'h-4 w-4'} />
            </div>
            <span className="text-sm ml-2">{replyCount}</span>
          </span>
          {retweeted ? (
            <span className="flex items-center group text-secondary-darkGreen">
              <div className="group-hover:bg-secondary-lightGreen  group-hover:text-secondary-darkGreen h-6 w-6 flex justify-center items-center rounded-full transform transition-colors duration-100 py-2">
                <RetweetIcon iconDesign={'h-4 w-4'} />
              </div>
              <span className="text-sm ml-2">{retweetCount}</span>
            </span>
          ) : (
            <span className="flex items-center hover:text-secondary-darkGreen group">
              <div className="group-hover:bg-secondary-lightGreen text-secondary-darkGray group-hover:text-secondary-darkGreen h-6 w-6 flex justify-center items-center rounded-full transform transition-colors duration-100 py-2">
                <RetweetIcon iconDesign={'h-4 w-4'} />
              </div>
              <span className="text-sm ml-2">{retweetCount}</span>
            </span>
          )}
          {liked ? (
            <span className="flex items-center text-secondary-darkRose group">
              <div className="group-hover:bg-secondary-lightRose group-hover:text-secondary-darkRose h-6 w-6 flex justify-center items-center rounded-full transform transition-colors duration-100 py-2">
                <LikedIcon iconDesign={'h-4 w-4'} />
              </div>
              <span className="text-sm ml-2">{likeCount}</span>
            </span>
          ) : (
            <span className="flex items-center hover:text-secondary-darkRose group">
              <div className="group-hover:bg-secondary-lightRose text-secondary-darkGray group-hover:text-secondary-darkRose h-6 w-6 flex justify-center items-center rounded-full transform transition-colors duration-100 py-2">
                <LikeIcon iconDesign={'h-4 w-4'} />
              </div>
              <span className="text-sm ml-2">{likeCount}</span>
            </span>
          )}
          <span>
            <div className="hover:bg-primary-medium text-secondary-darkGray hover:text-primary-base h-6 w-6 flex justify-center items-center rounded-full transform transition-colors duration-100 py-2">
              <ShareIcon
                iconDesign={
                  'h-4 w-4 hover:rounded-full hover:bg-primary-medium hover:text-primary-base'
                }
              />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TweetInFeed;
