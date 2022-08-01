import React from 'react';
import background from 'assets/images/bg/bg.jpg';

const Content = ({ children }) => (
  <div className='art-content h-full overflow-auto'>
    <div
      className='art-top-bg'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='art-top-bg-overlay' />
    </div>
    {children}
  </div>
);

export default Content;
