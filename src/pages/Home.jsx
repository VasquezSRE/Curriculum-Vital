import React from 'react';
import resume from 'data/profile.json';
import Header from 'components/organisms/Header';
import Summary from 'components/organisms/Summary';
import Experience from 'components/organisms/Experience';
import Projects from 'components/organisms/Project';
import Skills from 'components/organisms/Skills';

export default function Home() {
  return (
    <main className='antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5'>
      <div className='container mx-auto shadow bg-white py-5 px-10'>
        <Header
          contacts={resume.contact}
          name={resume.fullName}
          role={resume.role}
        />
        <Summary data={resume.summary} />
        <div className='border-b border-neutral-300 pb-2 my-5 lg:flex'>
          <div className='lg:w-2/3 lg:pr-8'>
            {resume.experience && <Experience data={resume.experience} />}
            {resume.projects && <Projects data={resume.projects} />}
          </div>
          <div className='lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 '>
            {resume.skills && <Skills data={resume.skills} />}
          </div>
        </div>
      </div>
    </main>
  );
}
