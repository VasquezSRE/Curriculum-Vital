import React from 'react';
import Slider from 'components/organisms/Slider';
import Counters from 'components/molecules/Counters';
import Experience from 'components/organisms/Experience';
import Certifications from 'components/organisms/Certifications';
import Hobbies from 'components/organisms/Hobbies';
import home from 'data/home.json';

function Home() {
  return (
    <div className=''>
      <Slider />
      <Counters data={home} />
      <Experience data={home} />
      <Hobbies data={home} />
      <Certifications data={home} />
    </div>
  );
}

export default Home;
