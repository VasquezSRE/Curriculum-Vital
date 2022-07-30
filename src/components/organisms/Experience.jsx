import React from 'react';

const Experience = ({ data }) => (
  <section>
    <h1 className='section-header'>Experience</h1>
    {data &&
      data.map((item) => (
        <article className='my-5' key={`${item.company.id}`}>
          <h2 className='item-header'>{item.role}</h2>
          <h3 className='item-sub'>
            {item.company} | {item.start} - {item.end || 'PRESENT'}
          </h3>
          <p className='py-6'>{item.description}</p>
        </article>
      ))}
  </section>
);

export default Experience;
