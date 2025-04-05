import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  overlayColor?: string;
  height?: string;
  speed?: number;
  className?: string;
}

const ParallaxContainer = styled(motion.div)<{ height: string }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParallaxBackground = styled(motion.div)<{ backgroundImage: string; overlayColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ overlayColor }) => overlayColor};
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]};
`;

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  backgroundImage = getUnsplashImage(unsplashImages.backgrounds.pattern1),
  overlayColor = 'rgba(30, 41, 59, 0.7)',
  height = '70vh',
  speed = 0.3,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <ParallaxContainer ref={ref} height={height} className={className}>
      <ParallaxBackground
        backgroundImage={backgroundImage}
        overlayColor={overlayColor}
        style={{ y }}
      />
      <ContentContainer>{children}</ContentContainer>
    </ParallaxContainer>
  );
};

export default ParallaxSection;
