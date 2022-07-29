import React from 'react';

export default function ProfileCard() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <div className='w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center'>
        <div className='mb-8'>
          <img
            className='object-center object-cover rounded-full h-36 w-36'
            src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
            alt='Profile Andrés Vásquez'
          />
        </div>
        <div className='text-center'>
          <p className='text-xl text-white font-bold mb-2'>Dany Bailey</p>
          <p className='text-base text-gray-400 font-normal'>
            Software Engineer
          </p>
        </div>
      </div>
    </div>
  );
}
