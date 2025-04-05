import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  el?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  delay?: number;
}

const textAnimation = (delay = 0) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: delay,
      },
    },
  };
};

const letterAnimation = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el = 'h1',
  className = '',
  delay = 0,
}) => {
  // Split the text into words and then into letters
  const words = text.split(' ');

  // Create a container for the animation
  const Container = motion[el];

  return (
    <Container
      className={className}
      variants={textAnimation(delay)}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`word-${wordIndex}`}
          className="inline-block"
          style={{ marginRight: '0.25em' }}
        >
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
              key={`letter-${letterIndex}`}
              className="inline-block"
              variants={letterAnimation}
              aria-hidden="true"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </Container>
  );
};

export default AnimatedText;
