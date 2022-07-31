import React from 'react';

const Layout = ({ children }) => (
  <div className='art-app'>
    <div className='art-app-wrapper'>
      <div className='art-app-container'>{children}</div>
    </div>
  </div>
);

export default Layout;
