"use client"

import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


function CoundDownTimer() {
  return (
    <div>
        <CountdownCircleTimer
            isPlaying
            duration={120}
            colorsTime={[7,5,2,0]}
            colors={['#004777','#F7B801','#A30000','#A30000']}
        >
            {({ remainingTime})=> remainingTime}
        </CountdownCircleTimer>
    </div>
  )
}

export default CoundDownTimer