import React from 'react';
import profile from 'assets/images/profile.jpg';

const Summary = ({ data }) => (
  <section className='py-5 border-b border-neutral-300 lg:flex items-center'>
    <div className='my-5'>
      <img
        className='rounded-full mx-auto w-32 xl:w-64'
        src={profile}
        alt='profile'
      />
    </div>
    <p className='text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg'>
      {data}
    </p>
  </section>
);

export default Summary;
