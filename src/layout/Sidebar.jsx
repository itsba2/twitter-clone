import React from 'react';
import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
  DotDotDotIcon,
  TwitterIcon,
} from '../icons/icons';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between px-2 w-72">
      <div>
        <div className="flex items-center justify-center hover:bg-primary-light w-12 h-12 rounded-full">
          <TwitterIcon iconDesign={'h-9 w-9 text-primary-base'} />
        </div>
        <nav className="mb-4">
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Notifications</li>
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark transform transition-colors duration-200 text-white font-bold text-sm rounded-full px-8 h-12 w-40 shadow-md">
          Tweet
        </button>
      </div>
      <div>User</div>
    </div>
  );
};

export default Sidebar;
