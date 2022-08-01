import React from 'react';
import certifications from 'components/atoms/certifications';

const Certifications = ({ data }) => (
  <div className='mx-auto sm:px-4 max-w-full mx-auto sm:px-4'>
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <div className='lg:w-full pr-4 pl-4'>
        <div className='art-section-title'>
          <div className='art-title-frame'>
            <h4>Certificaciones</h4>
          </div>
        </div>
      </div>
    </div>
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {data.certifications.map(({ image }) => (
        <div key={image} className='flex flex-col'>
          <img className='art-brand' src={certifications[image]} alt='brand' />
        </div>
      ))}
    </div>
  </div>
);

export default Certifications;
