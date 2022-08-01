import React from 'react';
import { BadgeCheckIcon } from '@heroicons/react/solid';

const Skills = ({ data }) => (
  <ul className='p-25-0 list-inside'>
    {data.map(({ title }) => (
      <li key={title} className='flex w-full gap-2 mt-2 mb-3'>
        <BadgeCheckIcon className='h-4 w-4' /> {title}
      </li>
    ))}
  </ul>
);

export default Skills;
