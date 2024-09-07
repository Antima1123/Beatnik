"use client"

import React, { useEffect, useState } from 'react';

const CountDownDigital: React.FC = () => {
    const calculateTimeLeft = (endTime: number) => {
        const difference = endTime - +new Date();
        let timeLeft = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [endTime] = useState(+new Date() + 12 * 60 * 60 * 1000); // Set end time once
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(endTime));
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    return (
        <div className='flex justify-center items-center text-4xl'>
            <div>
                {String(timeLeft.hours).padStart(2, '0')}:
            </div>
            <div>
                {String(timeLeft.minutes).padStart(2, '0')}:
            </div>
            <div>
                {String(timeLeft.seconds).padStart(2, '0')}
            </div>
        </div>
    );
};

export default CountDownDigital;
