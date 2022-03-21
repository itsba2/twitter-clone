import React, { useState } from 'react';
import { SideLink } from '../components/SideLink';
import SideUserBox from '../components/SideUserBox';
import { TwitterIcon } from '../icons/icons';

import { sideLinks } from '../data/SidebarData';

const Sidebar = () => {
  const [active, setActive] = useState('Home');
  const handleSideLinkClick = (name) => {
    setActive(name);
  };
  return (
    <div className="flex flex-col justify-between px-2 w-64">
      <div className="sticky top-0">
        <div className="mt-1 mb-2 flex items-center justify-center hover:bg-primary-light w-12 h-12 rounded-full transform transition-colors duration-100 cursor-pointer">
          <TwitterIcon iconDesign={'h-7 w-7 text-primary-base'} />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map((sideLink) => (
              <SideLink
                key={sideLink.name}
                name={sideLink.name}
                Icon={
                  active === sideLink.name
                    ? sideLink.icon.active
                    : sideLink.icon.passive
                }
                active={active}
                onSideLinkClick={handleSideLinkClick}
              />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark transform transition-colors duration-200 text-white font-bold text-sm rounded-full px-8 h-12 w-40 shadow-md">
          Tweet
        </button>
      </div>
      <div className="sticky bottom-0">
        <SideUserBox />
      </div>
    </div>
  );
};

export default Sidebar;
