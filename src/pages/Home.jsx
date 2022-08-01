import React from 'react';
import Slider from 'components/organisms/Slider';
import Counters from 'components/molecules/Counters';
import home from 'data/home.json';
import Experience from 'components/organisms/Experience';
// import Projects from 'components/organisms/Project';
// import Skills from 'components/organisms/Skills';

function Home() {
  return (
    <main>
      <Slider />
      <Counters data={home} />
      <Experience data={home} />
    </main>
  );
}

export default Home;
