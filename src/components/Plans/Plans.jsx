import React, { useState } from 'react';
import './Plans.css';

import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import { motion } from 'framer-motion';
const Plans = () => {
  const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
        transition: {
          type: 'tween',
          duration: 1.5,
          delay: delay,
          ease: [0.25, 0.6, 0.3, 0.8],
        },
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.4,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

  const transition = { duration: 3, type: 'spring' };
  const [data, setData] = useState(plansData);
  const [active, setActive] = useState(null);
  const filterItem = (categItem, e) => {
    
    const updatedItems = plansData.filter((curElem) => {
      return curElem.category.includes(categItem);
    });
    setData(updatedItems);
  };
  const buttons = [
    { name: 'Tümü', category: 'Tümü' },
    { name: 'Yiyecek', category: 'Yiyecek' },
    { name: 'Sporcu Takviyesi', category: 'Sporcu Takviyesi' },
    { name: 'Meşrubat', category: 'Meşrubat' },
    { name: 'Kahveler', category: 'Kahveler' },
    { name: 'Soğuk Kahveler', category: 'Soğuk Kahveler' },
    { name: 'Vitamin Bar', category: 'Vitamin Bar' },
  ];
  return (
    <div className='plans-container'>
      <div className='blur plans-blur-1'></div>
      <div className='blur plans-blur-2'></div>
      <div className='programs-header' style={{ gap: '2rem' }}>
        <span className='stroke-text'>Performans</span>
        <span>Artışına</span>
        <span className='stroke-text'>Hazır Ol!</span>
      </div>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
        className='hero-buttons'
      >
        {buttons.map((item) => {
          return (
            <button
              className={`btn ${active === item.category && 'active'}`}
              onClick={(e) => {
                filterItem(item.category, e);
                setActive(item.category);
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className='plans'>
        {data.map((plan, i) => (
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            transition={transition}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            className='plan'
            key={i}
          >
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className='features'>
              {plan.features.map((feature, i) => (
                <div className='feature'>
                  <img src={whiteTick} alt='' />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
