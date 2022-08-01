import React from 'react';

const Content = ({ children }) => (
  <div className='art-content'>
    <div className='art-curtain' />
    <div className='art-scroll-frame'>
      <div className='scroll-content'>{children}</div>
    </div>
  </div>
);

export default Content;
