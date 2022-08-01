import React from 'react';
import bg from 'assets/images/bg/bg.jpg';

const Content = ({ children }) => (
  <div className='art-content'>
    <div className='art-curtain' />
    <div className='art-top-bg' style={{ 'background-image': { bg } }}>
      <div className='art-top-bg-overlay' />
    </div>
    <div
      className='scroll-smooth'
      data-scrollbar='true'
      style={{ overflow: 'hidden', outline: 'none' }}
    >
      <div className='scroll-content'>{children}</div>
      <div
        className='scrollbar-track scrollbar-track-x'
        style={{ display: 'none' }}
      >
        <div
          className='scrollbar-thumb scrollbar-thumb-x'
          style={{ width: '1150px', transform: 'translate3d(0px, 0px, 0px)' }}
        />
      </div>
      <div
        className='scrollbar-track scrollbar-track-y'
        style={{ display: 'block' }}
      >
        <div
          className='scrollbar-thumb scrollbar-thumb-y'
          style={{
            height: '158.276px',
            transform: 'translate3d(0px, 760.724px, 0px)',
            'transform-origin': 'center bottom',
          }}
        />
      </div>
    </div>
  </div>
);

export default Content;
