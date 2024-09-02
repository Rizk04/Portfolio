import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const HoverText = ({ children }) => {
  const [style, api] = useSpring(() => ({
    transform: 'translateY(0px)',
    config: { mass: 1, tension: 300, friction: 20 },
  }));

  // Handle hover in and out
  const handleMouseEnter = () => {
    api.start({ transform: 'translateY(-10px)' });
  };

  const handleMouseLeave = () => {
    api.start({ transform: 'translateY(0px)' });
  };

  return (
    <animated.div
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </animated.div>
  );
};

export default HoverText;
