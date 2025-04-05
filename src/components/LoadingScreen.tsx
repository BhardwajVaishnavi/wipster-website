import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  duration?: number;
}

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LogoContainer = styled(motion.div)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled(motion.img)`
  width: 200px;
  height: auto;
`;

const ProgressBar = styled(motion.div)`
  width: 250px;
  height: 6px;
  background: rgba(78, 205, 196, 0.2);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.primary});
  border-radius: 4px;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren',
    }
  }
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.3,
    }
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: 'easeInOut'
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      duration: 1.5,
      ease: 'linear',
    }
  }
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ duration = 1500 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {isLoading && (
        <LoadingContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <LogoContainer
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <LogoImage
              src="/logo.png"
              alt="Wipster Technologies Logo"
              animate={pulseAnimation}
            />
          </LogoContainer>
          <ProgressBar>
            <Progress
              variants={progressVariants}
              initial="hidden"
              animate="visible"
            />
          </ProgressBar>
        </LoadingContainer>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
