import React from 'react';
import Avatar from 'components/molecules/Avatar';
import Information from 'components/molecules/Information';
import Idioms from 'components/molecules/Idioms';
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

          <ul className='art-knowledge-list p-15-0'>
            <li>Bootstrap, Materialize</li>

            <li>Stylus, Sass, Less</li>

            <li>Gulp, Webpack, Grunt</li>

            <li>GIT knowledge</li>
          </ul>

          <div className='art-ls-divider' />

          <div className='art-links-frame p-15-15'>
            <a
              href='files/cv.txt'
              className='art-link'
              download=''
              data-no-swup=''
            >
              Download cv <i className='fas fa-download' />
            </a>
          </div>
        </div>
      </div>
      <div className='art-ls-social'>
        <a href='#.' target='_blank'>
          <i className='fab fa-linkedin-in' />
        </a>

        <a href='#.' target='_blank'>
          <i className='fab fa-dribbble' />
        </a>

        <a href='#.' target='_blank'>
          <i className='fab fa-behance' />
        </a>

        <a href='#.' target='_blank'>
          <i className='fab fa-github' />
        </a>

        <a href='#.' target='_blank'>
          <i className='fab fa-twitter' />
        </a>
      </div>
    </div>
  </div>
);

export default Sidebar;
