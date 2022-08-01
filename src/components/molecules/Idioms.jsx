import React from 'react';

const Idioms = ({ data }) => (
  <div className='art-lang-skills p-30-15'>
    {data.map(({ title, value }) => (
      <div className='art-lang-skills-item'>
        <div
          id='circleprog'
          className='art-cirkle-progress'
          style={{
            position: 'relative',
          }}
        >
          <svg
            viewBox='0 0 100 100'
            style={{ display: 'block', width: '100 %' }}
          >
            <path
              d='M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93'
              stroke='#eee'
              strokeWidth='7'
              fillOpacity='0'
            />
            <path
              d='M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93'
              stroke='#555'
              strokeWidth='7'
              fillOpacity='0'
              style={{
                'stroke-dasharray': '292.273, 292.273',
                'stroke-dashoffset': '87.682',
              }}
            />
          </svg>
          <div
            className='progressbar-text'
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              padding: '0px',
              margin: '0px',
              transform: 'translate(-50%, -50%)',
              color: 'rgb(85, 85, 85)',
            }}
          >
            {value}
          </div>
        </div>
        <h6>{title}</h6>
      </div>
    ))}
  </div>
);

export default Idioms;
