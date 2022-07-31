import React from 'react';

const Button = ({ text, file }) => (
  <a href={file} className='art-link' download='' data-no-swup=''>
    {text}
  </a>
);

export default Button;
