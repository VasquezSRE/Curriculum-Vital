import React from 'react';

const Experience = ({ data }) => (
  <div className='mx-auto sm:px-4 max-w-full mx-auto sm:px-4'>
    <div className='flex flex-wrap '>
      <div className='lg:w-full pr-4 pl-4'>
        <div className='art-section-title'>
          <div className='art-title-frame'>
            <h4>Mi Experiencia</h4>
          </div>
        </div>
      </div>
      {data &&
        data.experience.map((item) => (
          <div
            key={item.role}
            className='lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4'
          >
            <div className='art-a art-service-icon-box'>
              <div className='art-service-ib-content'>
                <h5 className='mb-4'>{item.role}</h5>
                <div className='mb-4'>{item.description}</div>
                <div className='art-buttons-frame'>
                  <a
                    href='contact.html'
                    className='art-link art-color-link art-w-chevron'
                  >
                    {item.company} | {item.start} - {item.end || 'Presente'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default Experience;
