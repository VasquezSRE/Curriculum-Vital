import React from 'react';

const Layout = ({ children }) => (
  <div className='App art-app art-app-onepage'>
    <div className='art-mobile-top-bar' />
    <div className='art-app-wrapper'>
      <div className='art-app-container'>{children}</div>
    </div>
  </div>
);

export default Layout;
