import React from 'react';
import './Footer.css';

import Instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <div className='Footer-container'>
      <hr />
      <div className='footer'>
        <div className='social-links'>
          <img src={Instagram} alt='' />
        </div>
        <div
          style={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className='logo-f'
        >
          Fit Cafe (c) 2023 <br />
          <a
            style={{ textDecoration: 'none', color: 'white' }}
            href='insive.co'
          >
            {' '}
            insive.co tarafından sevgiyle tasarlanmıştır.
          </a>
        </div>
      </div>
      <div className='blur blur-f'></div>
      <div className='blur blur-f'></div>
    </div>
  );
};

export default Footer;
