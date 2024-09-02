import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const SlideUpText = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1 // Trigger when at least 10% of the element is in view
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { mass: 1, tension: 80, friction: 26 }
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

export default function Skills() {
  return (
    <div className='w-3/5 mx-auto flex flex-row justify-between space-x-7 content-center font-bold my-10 text-blue-200'>
      <div className='flex flex-col space-y-5'>
        <SlideUpText>
          <p className='text-3xl'>Languages</p>
        </SlideUpText>
        <SlideUpText>
          <p className='text-xl'>English</p>
        </SlideUpText>
        <SlideUpText>
          <p className='text-xl'>Arabic</p>
        </SlideUpText>
        <SlideUpText>
          <p className='text-xl'>French</p>
        </SlideUpText>
      </div>
      <div className='flex flex-col space-y-5'>
        <SlideUpText>
          <p className='text-3xl'>Skills</p>
        </SlideUpText>
        <SlideUpText>
          <p className='text-xl'>C#</p>
        </SlideUpText>
        <SlideUpText>
          <p className='text-xl'>React</p>
        </SlideUpText>
        <SlideUpText>
          <p className='text-xl'>Javascript</p>
        </SlideUpText>
      </div>
    </div>
  );
}
