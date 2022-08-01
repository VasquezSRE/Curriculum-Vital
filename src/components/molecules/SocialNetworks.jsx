import React from 'react';
import Icons from 'components/atoms/icons';

const SocialNetworks = ({ data }) => (
  <div className='art-ls-social'>
    {data.map(({ title, link, icon }) => (
      <a
        target='_blank'
        className='cursor-pointer'
        href={link}
        key={title}
        rel='noreferrer'
      >
        <img alt={title} src={Icons[icon]} className='h-5 w-5' />
      </a>
    ))}
  </div>
);

export default SocialNetworks;
