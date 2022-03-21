import React from 'react';
import HomeBadge from './HomeBadge';
import MessageBadge from './MessageBadge';

export const SideLink = ({ name, Icon, active, onSideLinkClick }) => {
  const isActive = active === name;
  return (
    <li className="group cursor-pointer" onClick={() => onSideLinkClick(name)}>
      <a href={name.toLowerCase()} className="block pointer-events-none">
        <div className="inline-block">
          <div
            className={`flex items-center group-hover:bg-secondary-xLightGray rounded-full p-2 pr-9 m-0.5 ${
              isActive ? 'font-bold' : ''
            }
          `}
          >
            <Icon iconDesign={`h-7 w-7 text-secondary-black`} />
            {name === 'Home' ? <HomeBadge /> : ''}
            {name === 'Messages' ? <MessageBadge /> : ''}
            <span className="ml-4 text-lg">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};
