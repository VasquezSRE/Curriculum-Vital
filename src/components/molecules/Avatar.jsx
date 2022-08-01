import React from 'react';
import avatar from 'assets/images/avatar.jpg';

const Avatar = ({ data }) => (
  <div className='art-header'>
    <div className='art-avatar'>
      <img className='art-avatar-curtain' src={avatar} alt='Avatar' />
      <div className='art-lamp-light'>
        <div className='art-available-lamp' />
      </div>
    </div>
    <h5 className='art-name mb-10'>
      <a href='home.html'>{data.fullName}</a>
    </h5>
    <div className='art-sm-text'> {data.summary}</div>
  </div>
);

export default Avatar;
