import React from 'react';
import NewTweets from '../components/NewTweets';
import TweetBox from '../components/TweetBox';
import { TopTweetsIcon } from '../icons/icons';
import { tweets } from '../data/FeedData';
import TweetInFeed from '../components/TweetInFeed';

const Feed = () => {
  return (
    <main className="w-600 mx-3 border-x">
      <div className="h-12 flex justify-between items-center px-3 sticky top-0 bg-secondary-white">
        <div className="font-bold text-lg">Home</div>
        <div className="hover:bg-secondary-xxLightGray rounded-full flex justify-center items-center transform transition-colors duration-100 cursor-pointer p-2">
          <TopTweetsIcon iconDesign={'h-5 w-5 text-secondary-black'} />
        </div>
      </div>
      <TweetBox />
      <NewTweets />

      {tweets.map((tweet) => (
        <TweetInFeed
          photo={tweet.photo}
          twitterName={tweet.twitterName}
          username={tweet.username}
          isVerified={tweet.isVerified}
          timeAgo={tweet.timeAgo}
          content={tweet.content}
          attachedPhoto={tweet.attachedPhoto}
          replyCount={tweet.replyCount}
          retweetCount={tweet.retweetCount}
          likeCount={tweet.likeCount}
        />
      ))}
    </main>
  );
};

export default Feed;
