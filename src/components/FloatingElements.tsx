import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaMobile, FaDesktop, FaCogs, FaRobot, FaServer } from 'react-icons/fa';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;

  &.secondary {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &.accent {
    color: ${({ theme }) => theme.colors.accent};
  }

  &.small {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  &.large {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`;

const CodeBlock = styled(motion.div)`
  position: absolute;
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: #4ECDC4;
  max-width: 200px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const FloatingElements: React.FC = () => {
  // Animation variants
  const floatAnimation = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: 'easeOut',
      }
    }
  });

  // Floating animation for icons
  const iconFloat = (duration: number, delay: number) => ({
    y: [0, -15, 0],
    x: [0, 5, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut"
    }
  });

  // Rotation animation
  const rotate = (duration: number, delay: number) => ({
    rotate: [0, 360],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "linear"
    }
  });

  // Code snippets
  const codeSnippets = [
    "function optimize() {\n  return data.map(item => \n    transform(item));\n}",
    "const api = new API();\napi.connect();\napi.getData();",
    "class AI {\n  train(data) {\n    // ML logic\n  }\n}"
  ];

  return (
    <Container>
      {/* Floating icons */}
      <FloatingIcon
        className="large"
        style={{ top: '15%', left: '10%' }}
        initial="initial"
        animate={iconFloat(8, 0)}
      >
        <FaCloud />
      </FloatingIcon>

      <FloatingIcon
        className="secondary"
        style={{ top: '25%', right: '15%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={iconFloat(7, 0.5)}
      >
        <FaCode />
      </FloatingIcon>

      <FloatingIcon
        className="small accent"
        style={{ bottom: '30%', left: '20%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={iconFloat(6, 1)}
      >
        <FaDatabase />
      </FloatingIcon>

      <FloatingIcon
        className="small"
        style={{ bottom: '20%', right: '25%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={iconFloat(9, 1.5)}
      >
        <FaMobile />
      </FloatingIcon>

      <FloatingIcon
        className="accent"
        style={{ top: '40%', left: '25%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={iconFloat(8, 2)}
      >
        <FaDesktop />
      </FloatingIcon>

      <FloatingIcon
        className="secondary small"
        style={{ top: '60%', right: '10%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={iconFloat(7, 2.5)}
      >
        <FaCogs />
      </FloatingIcon>

      <FloatingIcon
        className="large secondary"
        style={{ bottom: '15%', left: '5%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={iconFloat(10, 3)}
      >
        <FaRobot />
      </FloatingIcon>

      <FloatingIcon
        className="small"
        style={{ top: '10%', right: '30%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={iconFloat(6, 3.5)}
      >
        <FaServer />
      </FloatingIcon>

      {/* Floating code blocks */}
      <CodeBlock
        style={{ top: '30%', left: '30%' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 0.7,
          scale: 1,
          y: [0, -10, 0],
          transition: {
            opacity: { duration: 1, delay: 1 },
            scale: { duration: 0.5, delay: 1 },
            y: { duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
          }
        }}
      >
        {codeSnippets[0]}
      </CodeBlock>

      <CodeBlock
        style={{ bottom: '25%', right: '15%' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 0.7,
          scale: 1,
          y: [0, -15, 0],
          transition: {
            opacity: { duration: 1, delay: 1.5 },
            scale: { duration: 0.5, delay: 1.5 },
            y: { duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 }
          }
        }}
      >
        {codeSnippets[1]}
      </CodeBlock>

      <CodeBlock
        style={{ top: '70%', left: '15%' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 0.7,
          scale: 1,
          y: [0, -12, 0],
          transition: {
            opacity: { duration: 1, delay: 2 },
            scale: { duration: 0.5, delay: 2 },
            y: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1 }
          }
        }}
      >
        {codeSnippets[2]}
      </CodeBlock>
    </Container>
  );
};

export default FloatingElements;
