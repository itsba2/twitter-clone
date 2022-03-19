import React from 'react';
import { SearchIcon } from '../icons/icons';

const Search = () => {
  return (
    <div className="flex items-center space-x-4 p-2 bg-secondary-xxLightGray rounded-full  focus-within:bg-secondary-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
      <SearchIcon iconDesign={'h-6 w-6 pl-1'} />
      <input
        type="text"
        placeholder="Search Twitter"
        className="placeholder-secondary-darkGray bg-transparent outline-none w-full focus:text-secondary-black"
      />
    </div>
  );
};

export default Search;
