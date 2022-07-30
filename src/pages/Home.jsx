import React from 'react';
import resume from 'data/profile.json';
import Header from 'components/organisms/Header';

export default function Home() {
  return (
    <main className='antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5'>
      <div className='container mx-auto shadow bg-white py-5 px-10'>
        <Header
          contacts={resume.contact}
          name={resume.fullname}
          role={resume.role}
        />
      </div>
    </main>
  );
}
