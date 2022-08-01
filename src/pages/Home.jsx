import React from 'react';
import Slider from 'components/organisms/Slider';
import Counters from 'components/molecules/Counters';
import Experience from 'components/organisms/Experience';
import Certifications from 'components/organisms/Certifications';
import home from 'data/home.json';
// import Skills from 'components/organisms/Skills';

function Home() {
  return (
    <main>
      <Slider />
      <Counters data={home} />
      <Experience data={home} />
      <Certifications data={home} />
    </main>
  );
}

export default Home;
