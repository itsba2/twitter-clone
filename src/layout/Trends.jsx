import React from 'react';
import Follow from '../components/Follow';
import Search from '../components/Search';
import Trend from '../components/Trend';

const trends = [
  {
    trendTopic: '#BJKvHTY',
    tweetCount: '8,441',
  },
  {
    trendTopic: 'Batshuayi',
    tweetCount: '4,074',
  },
  {
    trendTopic: '#AliUzmanYalnızDegil',
    tweetCount: '27.5K',
  },
  {
    trendTopic: '#BahrainGP',
    tweetCount: '202K',
  },
  {
    trendTopic: 'Adana UzayaÇıkıyor',
    tweetCount: '',
  },
  {
    trendTopic: '#AileOlmak',
    tweetCount: '',
  },
  {
    trendTopic: 'Larin',
    tweetCount: '4,372',
  },
  {
    trendTopic: '#doktor',
    tweetCount: '18.9K',
  },
  {
    trendTopic: 'Okumuş',
    tweetCount: '4,363',
  },
];

const follows = [
  {
    photo:
      'https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg',
    twitterName: 'JavaScript',
    username: 'JavaScript',
    isFollower: true,
  },
  {
    photo:
      'https://pbs.twimg.com/profile_images/1410632439370641409/Pt-7RucE_400x400.jpg',
    twitterName: 'Visual Studio Code',
    username: 'code',
    isFollower: false,
  },
  {
    photo:
      'https://pbs.twimg.com/profile_images/1468993891584073729/a_op8KnL_400x400.jpg',
    twitterName: 'Tailwind CSS',
    username: 'tailwindcss',
    isFollower: true,
  },
];

const footers = [
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Imprint',
  'Accessibility',
  'Ads info',
  'More...',
];

const Trends = () => {
  return (
    <aside className="w-80 ml-3">
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
      <div className="text-xs text-secondary-darkGray ml-2">
        © 2022 Said Batuhan Bilmez{' '}
      </div>
    </aside>
  );
};

export default Trends;
