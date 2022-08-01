import React from 'react';
import Avatar from 'components/molecules/Avatar';
import Information from 'components/molecules/Information';
import Idioms from 'components/molecules/Idioms';
import Skills from 'components/molecules/Skills';
import SocialNetworks from 'components/molecules/SocialNetworks';
import Button from 'components/atoms/button';
import { ReactComponent as MenuIcon } from 'assets/icons/ellipsis-v-solid.svg';
import resumen from 'data/sidebar.json';

function Sidebar() {
  return (
    <div className='art-info-bar'>
      <div className='art-info-bar-frame'>
        <div className='art-info-bar-header'>
          <div className='art-info-bar-btn'>
            <MenuIcon className='menu-icon' />
          </div>
        </div>
        <Avatar data={resumen.avatar} />
        <div
          className='art-scroll-frame'
          style={{
            display: 'flex',
          }}
        >
          <div className='mt-72'>
            <Information data={resumen.information} />
            <div className='art-ls-divider' />
            <Idioms data={resumen.idioms} />
            <div className='art-ls-divider' />
            <Skills data={resumen.skills} />
            <div className='art-ls-divider' />

            <div className='art-links-frame pt-5 pb-5'>
              <Button text='Descargar CV' />
            </div>
          </div>
        </div>
        <SocialNetworks data={resumen.socials} />
      </div>
    </div>
  );
}

export default Sidebar;
