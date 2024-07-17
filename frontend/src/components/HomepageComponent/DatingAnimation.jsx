import React from 'react'
import Lottie from 'lottie-react';
import DatingAnimationData from '../../DatingAnimation.json'

export default function DatingAnimation() {
  return (
    <div style={{ width: '300px', height: 'auto' }}>
    <Lottie animationData={DatingAnimationData} loop={true} />
  </div>
  )
}