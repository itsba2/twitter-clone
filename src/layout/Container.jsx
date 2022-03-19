import React from 'react';

const Container = ({ children }) => {
  return (
    <div className=" max-w-6xl min-h-screen mx-auto flex ">{children}</div>
  );
};

export default Container;
