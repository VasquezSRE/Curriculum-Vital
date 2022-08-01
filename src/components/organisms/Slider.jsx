import React from 'react';
import slider from 'assets/images/slider.jpg';
import photo from 'assets/images/photo.png';

function Slider() {
  return (
    <div className='container mx-auto sm:px-4 max-w-full mx-auto sm:px-4'>
      <div className='flex flex-wrap  p-60-0 p-lg-30-0 p-md-15-0'>
        <div className='lg:w-full pr-4 pl-4'>
          <div
            className='art-a art-banner'
            style={{
              backgroundImage: `url(${slider})`,
            }}
          >
            <div className='art-banner-back' />
            <div className='art-banner-dec' />
            <div className='art-banner-overlay'>
              <div className='art-banner-title'>
                <h1 className='mb-15'>SRE | Devops Engineer!</h1>
                <div className='art-lg-text art-code mb-35'>
                  &lt;<i>Dev</i>&gt; Yo soy{' '}
                  <span className='inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform'>
                    Andrés Vásquez Ramírez.
                  </span>
                  <span className='box-border inline-block w-1 h-5 ml-2 -mb-1 bg-white md:-mb-2 md:h-6 animate-cursor will-change-transform' />
                  &lt;/<i>Ops</i>&gt;
                </div>
                <div className='art-buttons-frame'>
                  <a
                    href='https://www.linkedin.com/in/avasquezsre'
                    target='_blank'
                    className='art-btn art-btn-md'
                    rel='noreferrer'
                  >
                    <span>Perfil de LinkedIn</span>
                  </a>
                </div>
              </div>
              <img
                src={photo}
                className='art-banner-photo'
                alt='Andrés Felipe Vásquez'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
