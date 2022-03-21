import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
  HomeIconActive,
  ExploreIconActive,
  NotificationsIconActive,
  MessagesIconActive,
  BookmarksIconActive,
  ListsIconActive,
  ProfileIconActive,
} from '../icons/icons';

export const sideLinks = [
  {
    name: 'Home',
    icon: {
      active: HomeIconActive,
      passive: HomeIcon,
    },
  },
  {
    name: 'Explore',
    icon: {
      active: ExploreIconActive,
      passive: ExploreIcon,
    },
  },
  {
    name: 'Notifications',
    icon: {
      active: NotificationsIconActive,
      passive: NotificationsIcon,
    },
  },
  {
    name: 'Messages',
    icon: {
      active: MessagesIconActive,
      passive: MessagesIcon,
    },
  },
  {
    name: 'Bookmarks',
    icon: {
      active: BookmarksIconActive,
      passive: BookmarksIcon,
    },
  },
  {
    name: 'Lists',
    icon: {
      active: ListsIconActive,
      passive: ListsIcon,
    },
  },
  {
    name: 'Profile',
    icon: {
      active: ProfileIconActive,
      passive: ProfileIcon,
    },
  },
  {
    name: 'More',
    icon: {
      active: MoreIcon,
      passive: MoreIcon,
    },
  },
];
