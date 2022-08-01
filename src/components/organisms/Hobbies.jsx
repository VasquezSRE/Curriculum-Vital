import React from 'react';
import hobbies from 'components/atoms/hobbies';

const Hobbies = ({ data }) => (
  <div className='container mx-auto sm:px-4 max-w-full mx-auto sm:px-4'>
    <div className='flex flex-wrap '>
      <div className='lg:w-full pr-4 pl-4'>
        <div className='art-section-title'>
          <div className='art-title-frame'>
            <h4>Hobbies</h4>
          </div>
        </div>
      </div>
      <div className='lg:w-full pr-4 pl-4'>
        <div className='swiper-slide swiper-slide-active mr-30'>
          {data.hobbies.map(({ title, description, image }) => (
            <div key={title} className='lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4'>
              <div className='art-a art-testimonial'>
                <div className='testimonial-body'>
                  <img
                    className='art-testimonial-face'
                    src={hobbies[image]}
                    alt='face'
                  />
                  <h5>{title}</h5>
                  <div className='mb-15'>{description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Hobbies;
