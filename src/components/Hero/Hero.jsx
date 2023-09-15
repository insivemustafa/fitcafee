import React from 'react';
import { Button, Link } from 'react-scroll';

import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
import logo from '../../assets/logo.png';

const Hero = () => {
  const transition = { duration: 3, type: 'spring' };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className='hero'>
      <div>
        <img
          style={{
            position: 'absolute',
            top: '14px',
            left: '2rem',
            width: '200px',
            height: '80px',
          }}
          src={logo}
          alt='logo'
          width={250}
          height={250}
        />
      </div>

      <div className='left-h'>
        {/* the best ad */}
        <div className='the-best-ad'>
          <motion.div
            initial={{ left: mobile ? '100px' : '145px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>Şehirin En İyi Fitness Cafesi </span>
        </div>
        {/* Hero text */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Doğru </span>
            <span>Besinlerle</span>
          </div>
          <div>
            <span>Daha Güçlü</span>
          </div>
          <div>
            <span>
              Zengin menümüz ile sağlıklı beslenin, hayalinizdeki vücuda daha
              hızlı ulaşın.
            </span>
          </div>
        </div>

        {/* experience figures */}
        <div className='figures'>
          <div>
            <span>
              <NumberCounter end={9} start={5} delay={2.5} preFix='+' />
            </span>
            <span>Sağlıklı Yemek Seçeneği</span>
          </div>
          <div>
            <span>
              <NumberCounter end={26} start={18} delay={2.5} preFix='+' />
            </span>
            <span>Performans Arttıran İçecekler</span>
          </div>
          <div>
            <span>
              <NumberCounter end={6} start={2} delay={2} preFix='+' />
            </span>
            <span>Sporcu Takviyesi</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className='hero-buttons'>
          <Link
            style={{ display: 'flex', justifyContent: 'center' }}
            className='btn'
            to='plans'
            spy={true}
            smooth={true}
          >
            Menü
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className='right-h'>
        {/* heart rate */}
        <motion.div
          initial={{ right: mobile ? '4rem' : '-1rem' }}
          whileInView={{ right: mobile ? '16rem' : '4rem' }}
          transition={transition}
          viewport={{ once: false, amount: 0.5 }}
          className='heart-rate'
        >
          <img src={Heart} alt='' />
          <span>Kalp Atış</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img className='hero-image' src={hero_image} alt='' />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          className='hero-image-back'
          src={hero_image_back}
          alt=''
        />

        {/* calories */}
        <motion.div
          initial={mobile ? { left: '7rem' } : { right: '16rem' }}
          whileInView={mobile ? { left: '11rem' } : { right: '28rem' }}
          transition={transition}
          className='calories'
        >
          <img src={Calories} alt='' />
          <div>
            <span>Yakılan Kalori</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
