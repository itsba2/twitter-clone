import React from 'react';
import Follow from '../components/Follow';
import Search from '../components/Search';
import Trend from '../components/Trend';

import { trends, follows, footers } from '../data/TrendsData';

const Trends = () => {
  return (
    <aside className="w-72 ml-3">
      <div className="sticky top-0 bg-secondary-white py-2 mb-3">
        <Search />
      </div>
      <div className="bg-secondary-xxLightGray rounded-xl">
        <div className="font-bold text-lg pl-3 pt-3 h-12">Turkey trends</div>
        {trends.map((trend) => (
          <Trend
            count={trend.tweetCount}
            topic={trend.trendTopic}
            order={trends.indexOf(trend) + 1}
          />
        ))}
        <div className="pl-3 pt-3 h-12 text-sm text-primary-base hover:bg-secondary-xLightGray hover:rounded-b-xl cursor-pointer">
          Show more
        </div>
      </div>
      <div className="bg-secondary-xxLightGray rounded-xl mt-4">
        <div className="font-bold text-lg pl-3 pt-3 h-12">Who to follow</div>
        {follows.map((follow) => (
          <Follow
            photo={follow.photo}
            twitterName={follow.twitterName}
            username={follow.username}
            isFollower={follow.isFollower}
          />
        ))}
        <div className="pl-3 pt-3 h-12 text-sm text-primary-base hover:bg-secondary-xLightGray hover:rounded-b-xl cursor-pointer">
          Show more
        </div>
      </div>
      <div className="flex flex-wrap p-2 mt-2">
        {footers.map((footer) => (
          <span className="text-xs text-secondary-darkGray mr-3 cursor-pointer hover:underline">
            {footer}
          </span>
        ))}
      </div>
      <div className="text-xs text-secondary-darkGray ml-2">© 2022 itsba2 </div>
    </aside>
  );
};

export default Trends;
