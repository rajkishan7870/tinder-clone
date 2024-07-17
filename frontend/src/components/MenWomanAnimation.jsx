import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../MenWomanAnimation.json';

const MenWomanAnimation = () => {
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default MenWomanAnimation;

