import React from 'react';
// import resume from 'data/profile.json';
// import Header from 'components/organisms/Header';
// import Summary from 'components/organisms/Summary';
// import Experience from 'components/organisms/Experience';
// import Projects from 'components/organisms/Project';
// import Skills from 'components/organisms/Skills';
import profile from 'assets/images/profile.jpg';

export default function Home() {
  return (
    <main>
      <div className='art-info-bar'>
        <div className='art-info-bar-frame'>
          <div className='art-header'>
            <div className='art-avatar'>
              <a className='art-avatar-curtain'>
                <img
                  className='rounded-full mx-auto w-32 xl:w-64'
                  src={profile}
                  alt='profile'
                />
              </a>
              <div className='art-lamp-light'>
                <div className='art-available-lamp' />
              </div>
            </div>
            <h5 className='art-name mb-10'>
              <a href='home.html'>Artur Carter</a>
            </h5>
            <div className='art-sm-text'>
              Front-end Deweloper Ui/UX Designer
            </div>
          </div>
        </div>
      </div>
      <div className='art-content'>
        <div className='art-curtain'>
          <div className='art-top-bg'>
            <div className='art-top-bg-overlay' />
          </div>
        </div>
      </div>
    </main>
  );
}
