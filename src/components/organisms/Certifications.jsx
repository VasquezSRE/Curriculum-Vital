import React from 'react';
import certifications from 'components/atoms/certifications';

const Certifications = ({ data }) => (
  <div className='container mx-auto sm:px-4 max-w-full mx-auto sm:px-4'>
    <div className='flex flex-wrap '>
      <div className='lg:w-full pr-4 pl-4'>
        <div className='art-section-title'>
          <div className='art-title-frame'>
            <h4>Certificaciones</h4>
          </div>
        </div>
      </div>
      {data.certifications.map(({ image }) => (
        <div key={image} className='w-1/2 lg:w-1/4 pr-4 pl-4'>
          <img className='art-brand' src={certifications[image]} alt='brand' />
        </div>
      ))}
    </div>
  </div>
);

export default Certifications;
