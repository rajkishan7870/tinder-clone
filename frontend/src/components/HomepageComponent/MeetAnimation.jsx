import React from 'react'
import Lottie from 'lottie-react';
import MeetAnimationData from '../../MeetAnimation.json'

export default function MeetAnimation() {
  return (
    <div style={{ width: '300px', height: 'auto' }}>
    <Lottie animationData={MeetAnimationData} loop={true} />
  </div>
  )
}
