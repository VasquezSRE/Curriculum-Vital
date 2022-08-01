import React from 'react';

const Counters = ({ data }) => (
  <div className='container mx-auto sm:px-4 max-w-full mx-auto sm:px-4'>
    <div className='flex flex-wrap  pt-8'>
      {data.counters.map(({ title, counter }) => (
        <div key={title} className='md:w-1/4 pr-4 pl-4 w-1/2'>
          <div className='art-counter-frame' style={{ opacity: 1 }}>
            <div className='art-counter-box'>
              <span className='art-counter' style={{ opacity: 1 }}>
                {counter}
              </span>
              <span className='art-counter-plus'>+</span>
            </div>
            <h6>{title}</h6>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Counters;
