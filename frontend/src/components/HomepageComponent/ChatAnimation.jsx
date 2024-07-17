import React from 'react'
import Lottie from 'lottie-react';
import ChatAnimationData from '../../Chat.json'

export default function ChatAnimation() {
  return (
    <div style={{ width: '300px', height: 'auto' }}>
    <Lottie animationData={ChatAnimationData} loop={true} />
  </div>
  )
}
