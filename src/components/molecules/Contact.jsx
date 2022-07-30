import React from 'react';
import { ReactComponent as MailIcon } from 'assets/icons/mail.svg';
import { ReactComponent as WhatsAppIcon } from 'assets/icons/whatsapp.svg';
import { ReactComponent as LinkedinIcon } from 'assets/icons/linkedin.svg';
import { ReactComponent as LocationIcon } from 'assets/icons/location.svg';

const Contact = ({ field, value }) => (
  <span className='flex my-2 text-primary-900 tracking-widest items-center'>
    {field === 'email' && (
      <>
        <MailIcon className='contact-icon' />
        <a className='contact-link' href={`mailto:${value}`} title='email'>
          {value}
        </a>
      </>
    )}
    {field === 'phone' && (
      <>
        <WhatsAppIcon className='contact-icon' />
        <a className='contact-link' href={`tel:${value}`} title='phone'>
          {value}
        </a>
      </>
    )}
    {field === 'website' && (
      <>
        <LinkedinIcon className='contact-icon' />
        <a
          className='contact-link'
          target='_blank'
          href={value}
          rel='noopener noreferrer'
          title='website'
        >
          Personal Site
        </a>
      </>
    )}
    {field === 'location' && (
      <>
        <LocationIcon className='contact-icon' />
        <span className='contact-link'>{value}</span>
      </>
    )}
  </span>
);

export default Contact;
