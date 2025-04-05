import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';
import { faqData } from '../data/faqData';

const FAQContainer = styled(motion.div)`
  width: 100%;
`;

const FAQ: React.FC = () => {
  const [openFAQs, setOpenFAQs] = useState<number[]>([0]); // Open the first FAQ by default

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prevOpenFAQs) => {
      if (prevOpenFAQs.includes(index)) {
        return prevOpenFAQs.filter((item) => item !== index);
      } else {
        return [...prevOpenFAQs, index];
      }
    });
  };

  return (
    <FAQContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {faqData.map((faq, index) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={openFAQs.includes(index)}
          toggleFAQ={() => toggleFAQ(index)}
          index={index}
        />
      ))}
    </FAQContainer>
  );
};

export default FAQ;
