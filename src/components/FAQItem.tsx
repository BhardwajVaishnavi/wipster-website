import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FAQ } from '../types';

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  toggleFAQ: () => void;
  index: number;
}

const FAQContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const QuestionContainer = styled.div<{ isOpen: boolean }>`
  padding: ${({ theme }) => theme.space[6]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isOpen, theme }) => 
    isOpen ? 'rgba(37, 99, 235, 0.05)' : theme.colors.background};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(37, 99, 235, 0.05);
  }
`;

const Question = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin: 0;
  flex: 1;
`;

const IconContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: ${({ theme }) => theme.space[4]};
`;

const AnswerContainer = styled(motion.div)`
  padding: 0 ${({ theme }) => theme.space[6]} ${({ theme }) => theme.space[6]};
  color: ${({ theme }) => theme.colors.gray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const answerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: {
      duration: 0.3,
    }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: {
      duration: 0.3,
    }
  }
};

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, toggleFAQ, index }) => {
  return (
    <FAQContainer
      variants={faqItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <QuestionContainer isOpen={isOpen} onClick={toggleFAQ}>
        <Question>{faq.question}</Question>
        <IconContainer
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </IconContainer>
      </QuestionContainer>
      
      <AnimatePresence>
        {isOpen && (
          <AnswerContainer
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {faq.answer}
          </AnswerContainer>
        )}
      </AnimatePresence>
    </FAQContainer>
  );
};

export default FAQItem;
