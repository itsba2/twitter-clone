import React from 'react';

const Container = ({ children }) => {
  return (
    <div className=" max-w-7xl min-h-screen mx-auto flex border">
      {children}
    </div>
  );
};

export default Container;
