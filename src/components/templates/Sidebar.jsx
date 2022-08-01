import React from 'react';
import Avatar from 'components/molecules/Avatar';
import Information from 'components/molecules/Information';
import Idioms from 'components/molecules/Idioms';
import Skills from 'components/molecules/Skills';
import SocialNetworks from 'components/molecules/SocialNetworks';
import Button from 'components/atoms/button';
import resumen from 'data/sidebar.json';

const Sidebar = () => (
  <div className='art-info-bar'>
    <div className='art-info-bar-frame'>
      <Avatar data={resumen.avatar} />
      <div
        id='scrollbar2'
        className='art-scroll-frame'
        data-scrollbar='true'
        tabIndex='-1'
      >
        <div className='scroll-content'>
          <Information data={resumen.information} />
          <div className='art-ls-divider' />
          <Idioms data={resumen.idioms} />
          <div className='art-ls-divider' />
          <Skills data={resumen.skills} />
          <div className='art-ls-divider' />

          <div className='art-links-frame p-15-15'>
            <Button text='Descargar' />
          </div>
        </div>
      </div>
      <SocialNetworks data={resumen.socials} />
    </div>
  </div>
);

export default Sidebar;
